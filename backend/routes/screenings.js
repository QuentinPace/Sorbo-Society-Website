// import { Router } from "express";
// import { authenticateJWT, validateCreateScreeningBody } from "../middleware.js";
// import { prisma } from "../script.js";

// let screeningRouter = Router();

// screeningRouter.get("/current", authenticateJWT, async (req, res) => {
//   const ongoing = await prisma.screening.findMany({
//     where: {
//       dueDate: {
//         gt: new Date(),
//       },
//       userId: req.user.id,
//     },
//     include: {
//       candidates: true,
//     },
//   });

//   const finished = await prisma.screening.findMany({
//     where: {
//       dueDate: {
//         lt: new Date(),
//       },
//       reviewed: true,
//       userId: req.user.id,
//     },
//     include: {
//       candidates: true,
//     },
//   });

//   const readyForReview = await prisma.screening.findMany({
//     where: {
//       dueDate: {
//         lt: new Date(),
//       },
//       reviewed: false,
//       userId: req.user.id,
//     },
//     include: {
//       candidates: true,
//     },
//   });

//   res.status(200).json({ Screenings: { ongoing, readyForReview, finished } });
// });

// screeningRouter.post(
//   "/",
//   authenticateJWT,
//   validateCreateScreeningBody,
//   async (req, res) => {
//     const { companyName, name, dueDate, position, startDate, candidates } =
//       req.body;

//     let newScreeningData = {
//       companyName,
//       name,
//       dueDate: new Date(dueDate),
//       position,
//       userId: req.user.id,
//     };
//     if (startDate) {
//       newScreeningData.startDate = new Date(startDate);
//     }
//     const newScreening = await prisma.screening.create({
//       data: {
//         ...newScreeningData,
//         candidates: {
//           create: candidates.map((email) => {
//             return { email };
//           }),
//         },
//       },
//       include: {
//         candidates: true,
//       },
//     });

//     res.status(201).json({ Screening: newScreening });
//   }
// );

// export default screeningRouter;
