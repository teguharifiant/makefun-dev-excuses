import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line entry for make.fun "Make the AI Judge Laugh: Developer
// Excuses": the code was fine in every environment — until production
// added the one test case nobody ever wrote: actual users.
const text =
  "The code worked fine until production added the one test case I never wrote: actual users.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be a single line of 1-200 characters.
const MIN_CHARS = 1;
const MAX_CHARS = 200;
const length = [...text].length;
if (length < MIN_CHARS || length > MAX_CHARS) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
const hasNewline = text.includes("\n") || text.includes("\r");
if (hasNewline) {
  throw new Error("entry must be a single line (no newline characters)");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
