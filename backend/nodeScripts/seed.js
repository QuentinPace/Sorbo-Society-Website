import { prisma } from "../script.js";
import bcrypt from "bcryptjs";

async function main() {
  try {
    const user1HashedPass = await bcrypt.hash("password", 10);
    const user1 = await prisma.user.create({
      data: {
        username: "demo",
        email: "demo@gmail.com",
        hashedPassword: user1HashedPass,
      }
    });
  } catch (e) {
    console.error(e);
    process.exitCode = 1; // <- safer than process.exit(1)
  } finally {
    await prisma.$disconnect();
  }
}
main();

prisma.user.createMany;
