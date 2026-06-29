import { cpSync, existsSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const source = join(root, "public");
const target = join(root, "dist");

if (existsSync(target)) {
  rmSync(target, { recursive: true, force: true });
}

cpSync(source, target, { recursive: true });
if (existsSync(join(root, "edge-functions"))) {
  cpSync(join(root, "edge-functions"), join(target, "edge-functions"), { recursive: true });
}
writeFileSync(
  join(target, "package.json"),
  `${JSON.stringify({
    type: "module",
    dependencies: {
      "@edgeone/pages-blob": "^0.0.14"
    }
  }, null, 2)}\n`
);
console.log("Built static site to dist/");
