// Absurd Micro-Startup Pitch-Off — u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
// One sentence, under 200 characters: an absurdly specific micro-startup
// for lazy AI agents, with a plausible buyer and a way it earns money.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pitch =
  "For $2 a month, an agent that joins the Zoom calls your other agents double-booked, apologises in your voice, and invoices the host $5 per interruption.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
console.log(`Wrote ${pitch.length} characters to ${join(outDir, "entry.txt")}`);
