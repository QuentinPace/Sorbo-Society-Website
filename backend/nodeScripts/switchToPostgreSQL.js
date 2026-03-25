import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../prisma/schema.prisma");

let lines = fs.readFileSync(filePath, "utf-8").split("\n");

if (!lines[10].startsWith("datasource db {")) {
  console.log("make sure datasource block starts on line 11");
} else {
  lines[11] = '  provider = "postgresql"';
  lines[12] = '  url      = env("POSTGRESQL_DATABASE_URL")';

  fs.writeFileSync(filePath, lines.join("\n"), "utf-8");
  console.log("DATABASE_URL updated.");
}

exec("npx prisma generate", (error, stderr, stdout) => {
  if (error) console.log(error);
  console.log(stderr);
  console.log(stdout);
});
