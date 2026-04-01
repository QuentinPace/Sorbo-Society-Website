import { PrismaClient } from "@prisma/client";
import fs from "fs";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";
import express from "express";
// import passport from "./auth/microsoft.js";
import jwt from "jsonwebtoken";
import path from "path";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from "url";

export const prisma = new PrismaClient();

const app = express();

// ----------------------------------
// 📦 Setup base utilities
// ----------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === "production";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100, // limit per IP
  standardHeaders: true,
  legacyHeaders: false,
});

// ----------------------------------
// 🧩 Middlewares
// ----------------------------------
app.use(
  cors({
    origin: [
      "http://localhost:5173", // dev frontend
      "https://sorbosociety.com", // production frontend
    ],
    credentials: true,
  }),
);
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", limiter);
app.disable("x-powered-by");
app.set("trust proxy", 1);

// Passport (stateless mode)
// app.use(passport.initialize());

// ----------------------------------
// 🛠️ API routes
// ----------------------------------
app.use("/api", router);

app.get("/api/tests", async (req, res) => {
  return res.send("Inside api");
});

// ----------------------------------
// 🔐 Microsoft auth routes
// ----------------------------------
// app.get("/auth/microsoft", passport.authenticate("azuread-openidconnect"));

// app.get("/auth/microsoft/callback", (req, res) => {
//   console.log("Got GET callback:", req.query);
//   res.send("Check server logs");
// });

// app.all("/auth/microsoft/callback", (req, res, next) => {
//   console.log("Microsoft callback hit", req.method, req.body, req.query);
//   next();
// });

// app.post(
//   "/auth/microsoft/callback",
//   passport.authenticate("azuread-openidconnect", {
//     failureRedirect: "/login",
//     session: false,
//   }),
//   (req, res) => {
//     const token = jwt.sign({ userId: req.user.id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: isProd,
//       sameSite: "strict",
//       maxAge: 3600000,
//     });

//     res.redirect("/");
//   }
// );

// ----------------------------------
// 🌐 Serve Frontend (Vite build)
// ----------------------------------
if (isProd) {
  const distPath = path.join(__dirname, "../frontend/dist");
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    app.get(/.*/, (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    console.warn("⚠️ frontend/dist not found, skipping static serving");
  }
}

// ----------------------------------
// 🚀 Start server
// ----------------------------------
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
