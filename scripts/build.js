import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const app = join(root, "icon-web");
const output = join(root, "dist");

execFileSync("npm", ["install"], { cwd: app, stdio: "inherit" });
execFileSync("npm", ["run", "build"], { cwd: app, stdio: "inherit" });

if (existsSync(output)) {
  rmSync(output, { recursive: true, force: true });
}

cpSync(join(app, "dist"), output, { recursive: true });
console.log("Root build completed. Output copied to dist/");
