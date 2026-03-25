import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  authenticateJWT,
  validateSignupBody,
  validateLoginBody,
} from "../middleware.js";
import { prisma } from "../script.js";
import { Router } from "express";

let sessionRouter = Router();

//signup
sessionRouter.post("/signup", validateSignupBody, async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res
        .status(400)
        .json({ errors: { email: "Email already registered" } });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        hashedPassword,
      },
    });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });

    res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    res.status(500).json({ errors: { message: "Signup failed" } });
  }
});

//login
sessionRouter.post("/login", validateLoginBody, async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user)
      return res
        .status(401)
        .json({ errors: { email: "No user with that email" } });
    const valid = await bcrypt.compare(password, user.hashedPassword);
    if (!valid)
      return res.status(401).json({ errors: { password: "Wrong password" } });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600000,
    });

    res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ errors: { message: "Login failed" } });
  }
});

//logout
sessionRouter.delete("/", async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "success" });
});

sessionRouter.get("/", authenticateJWT, async (req, res) => {
  res.send(req.user);
});

export default sessionRouter;
