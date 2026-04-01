import { Router } from "express";
// import screeningRouter from "./screenings.js";
import sessionRouter from "./session.js";
import emailRouter from "./email.js";

let router = Router();

// router.use("/screenings", screeningRouter);
router.use("/session", sessionRouter);
router.use("/email", emailRouter);

export default router;
