import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My smart fridge stayed up all night doing a firmware update, then photographed me eating cheese at 2 a.m. and sent it to the app like evidence — mate, you make cold air, you are not the police.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n");
