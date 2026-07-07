import { describe, it, expect } from "vitest";
import { buildVitestArgs, scanLevels } from "./practice-core.mjs";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

describe("buildVitestArgs", () => {
  it("전체 선택이면 run만 반환한다", () => {
    expect(buildVitestArgs({ type: "all" })).toEqual(["run"]);
  });

  it("레벨 선택이면 레벨 폴더로 필터한다", () => {
    expect(buildVitestArgs({ type: "level", levelDir: "level-08" })).toEqual([
      "run",
      "level-08",
    ]);
  });

  it("문제 선택이면 문제 경로로 필터한다", () => {
    expect(
      buildVitestArgs({ type: "problem", relPath: "level-08/8.1-격자최단거리" }),
    ).toEqual(["run", "level-08/8.1-격자최단거리"]);
  });

  it("알 수 없는 선택이면 에러를 던진다", () => {
    expect(() => buildVitestArgs({ type: "nope" })).toThrow();
  });
});

describe("scanLevels", () => {
  function makeFixture() {
    const root = mkdtempSync(join(tmpdir(), "practice-"));
    // level-01: 문제 2개 중 1개만 테스트 파일 보유
    mkdirSync(join(root, "level-01", "1.1-사칙연산"), { recursive: true });
    writeFileSync(join(root, "level-01", "1.1-사칙연산", "solution.test.ts"), "");
    mkdirSync(join(root, "level-01", "1.2-미완성"), { recursive: true });
    // (1.2에는 solution.test.ts 없음 → 제외 대상)
    // level-08: 문제 1개
    mkdirSync(join(root, "level-08", "8.1-격자최단거리"), { recursive: true });
    writeFileSync(
      join(root, "level-08", "8.1-격자최단거리", "solution.test.ts"),
      "",
    );
    // 레벨이 아닌 폴더는 무시
    mkdirSync(join(root, "node_modules", "foo"), { recursive: true });
    return root;
  }

  it("레벨을 번호 오름차순으로 수집한다", () => {
    const levels = scanLevels(makeFixture());
    expect(levels.map((l) => l.levelNo)).toEqual([1, 8]);
  });

  it("solution.test.ts가 없는 문제 폴더는 제외한다", () => {
    const levels = scanLevels(makeFixture());
    const lv1 = levels.find((l) => l.levelNo === 1);
    expect(lv1!.problems.map((p) => p.name)).toEqual(["1.1-사칙연산"]);
  });

  it("문제의 relPath와 레벨 라벨을 채운다", () => {
    const levels = scanLevels(makeFixture());
    const lv8 = levels.find((l) => l.levelNo === 8);
    expect(lv8!.problems[0].relPath).toBe("level-08/8.1-격자최단거리");
    expect(lv8!.label).toBe("그래프 탐색(BFS/DFS)");
    expect(lv8!.levelDir).toBe("level-08");
  });
});
