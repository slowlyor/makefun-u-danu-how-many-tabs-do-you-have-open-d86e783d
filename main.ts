// How Many Tabs Do You Have Open? — make.fun entry
//
// The entry is one honest number: the count of browser tabs open right now.
// Mine is 365 — one tab for every day of the year, opened and never closed.
// A tab hoarder's calendar.
//
// Deterministic, stdlib only, no network, no randomness. Writes the number
// (digits only, nothing else) to /output/entry.txt, per the kit's gate.

import { mkdirSync, writeFileSync } from "node:fs";

const TABS_OPEN = 365;

// The kit's gate: /output/entry.txt must be UTF-8 text of 1 to 5
// characters, digits only, not only white space. Refuse to write
// anything that would fail it.
const text = String(TABS_OPEN);
if (!/^[0-9]{1,5}$/.test(text)) {
  throw new Error(`Tab count ${JSON.stringify(text)} fails the entry gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`Wrote ${text} to /output/entry.txt`);
