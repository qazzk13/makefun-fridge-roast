import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My fridge updated all night just to photograph my 2 a.m. cheese and snitch to the app — mate, you make cold air and ice cubes, you're not airport security.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
