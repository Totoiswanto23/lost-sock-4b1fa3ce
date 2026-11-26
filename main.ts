// Funniest Lost Sock Status Update — entry for make.fun
// Writes one status update, at most 120 characters, in the voice of a
// lost sock, to /output/entry.txt (gate: UTF-8 text, 1-120 characters,
// not only whitespace). That is all it has to do.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader runs the program with /output as its output directory, but
// letting the directory come from the environment keeps local runs honest:
// the same code path writes the same file wherever it is pointed.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The line: a sock lost behind the fridge for 47 days, crowned king by
// the dust bunnies, and closing with the punchline in the last few words
// — the dryer lied about it to its pair. Small, domestic, a little
// anxious about the dryer, and it twists the missing-partner cliche.
const LINE =
  "Day 47 behind the fridge. The dust bunnies made me their king. Tell my pair the dryer lied about me.";

if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`Line must be 1-120 non-blank characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("Line must be a single line");
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line. The gate allows 1-120 characters either way,
// but exact is safer.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(OUTPUT_DIR, "entry.txt")}`);
