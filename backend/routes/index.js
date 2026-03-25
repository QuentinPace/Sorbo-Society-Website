import { Router } from "express";
// import screeningRouter from "./screenings.js";
import sessionRouter from "./session.js";

let router = Router();

// router.use("/screenings", screeningRouter);
router.use("/session", sessionRouter);

export default router;
