import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const { default: server } = await import(join(root, "dist/server/server.js"));

const request = new Request("http://localhost/", {
  method: "GET",
  headers: { Accept: "text/html" },
});

const response = await server.fetch(request, {}, {});

if (!response.ok && response.status !== 200) {
  console.error("SSR returned status", response.status);
  process.exit(1);
}

const html = await response.text();
const outPath = join(root, "dist/client/index.html");
writeFileSync(outPath, html, "utf-8");
console.log("Generated dist/client/index.html (" + html.length + " bytes)");
