#!/usr/bin/env node
import { select } from "@inquirer/prompts";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { scanLevels, buildVitestArgs } from "./practice-core.mjs";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");

function pad(n) {
  return String(n).padStart(2, "0");
}

async function main() {
  const levels = scanLevels(rootDir);
  if (levels.length === 0) {
    console.error(
      "실행할 문제를 찾지 못했어요. 저장소 루트에서 실행하고 있는지 확인해 주세요.",
    );
    process.exit(1);
  }

  const levelChoice = await select({
    message: "어떤 레벨을 풀어볼까요?",
    choices: [
      { name: "전체 (모든 레벨 테스트)", value: { type: "all" } },
      ...levels.map((l) => ({
        name: `Level ${pad(l.levelNo)} — ${l.label} (${l.problems.length}문제)`,
        value: { type: "level", level: l },
      })),
    ],
  });

  let selection;
  if (levelChoice.type === "all") {
    selection = { type: "all" };
  } else {
    const level = levelChoice.level;
    selection = await select({
      message: `Level ${pad(level.levelNo)} — 어떤 문제를 풀어볼까요?`,
      choices: [
        {
          name: `전체 (Level ${pad(level.levelNo)} 전체 테스트)`,
          value: { type: "level", levelDir: level.levelDir },
        },
        ...level.problems.map((p) => ({
          name: p.name,
          value: { type: "problem", relPath: p.relPath },
        })),
      ],
    });
  }

  const args = buildVitestArgs(selection);
  console.log(`\n▶ npx vitest ${args.join(" ")}\n`);
  const result = spawnSync("npx", ["vitest", ...args], {
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  process.exit(result.status ?? 1);
}

main().catch((err) => {
  if (err && err.name === "ExitPromptError") {
    console.log("\n취소했어요. 다음에 또 풀어봐요! 👋");
    process.exit(0);
  }
  throw err;
});
