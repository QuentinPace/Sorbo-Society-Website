import jwt from "jsonwebtoken";
import { prisma } from "./script.js";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const authenticateJWT = (req, res, next) => {
  // authenticates the request as well as adds the current user to the request
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "No User" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    const currUser = await prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
    });

    if (!currUser) {
      res.clearCookie("token", {
        httpOnly: true,
        sameSite: "Strict", // or 'Lax'
        secure: process.env.NODE_ENV === "production",
      });
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    let { id, username, createdAt, email } = currUser;

    req.user = { id, username, email, createdAt };
    next();
  });
};

export const validateSignupBody = (req, res, next) => {
  const { email, password, username } = req.body;
  let errors = {};
  let hasError = false;

  if (!isValidEmail(email)) {
    errors.email = "Invalid email";
    hasError = true;
  }
  if (username.length > 20 || username.length < 3) {
    errors.username = "Username must be between 3 and 20 character";
    hasError = true;
  }
  if (password.length > 20 || password.length < 3) {
    errors.password = "Password must be between 3 and 20 character";
    hasError = true;
  }

  if (hasError) {
    return res.status(400).json({ message: "Bad Request", errors });
  }

  next();
};

export const validateLoginBody = (req, res, next) => {
  const { email, password } = req.body;
  let errors = {};
  let hasError = false;

  if (!isValidEmail(email)) {
    errors.email = "Invalid email";
    hasError = true;
  }
  if (password.length > 20 || password.length < 3) {
    errors.password = "Password must be between 3 and 20 character";
    hasError = true;
  }

  if (hasError) {
    return res.status(400).json({ message: "Bad Request", errors });
  }

  next();
};

export const validateCreateScreeningBody = (req, res, next) => {
  const { companyName, name, dueDate, position, candidates } = req.body;

  let errors = {};
  let hasError = false;

  if (!companyName) {
    errors.companyName = "Company name is required";
    hasError = true;
  }
  if (!candidates) {
    errors.candidates = "Candidates are required";
    hasError = true;
  }
  if (!position) {
    errors.position = "Position is required";
    hasError = true;
  }
  if (!dueDate) {
    errors.dueDate = "Due date is required";
    hasError = true;
  }
  if (!name) {
    errors.name = "Name is required";
    hasError = true;
  }

  if (hasError) {
    return res.status(400).json({ message: "Bad Request", errors });
  }

  next();
};
