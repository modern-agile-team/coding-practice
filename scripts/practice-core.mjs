import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

export const LEVEL_LABELS = {
  0: "언어 기본기",
  1: "기초 구현(사칙연산·조건문)",
  2: "반복문·배열·간단 수학",
  3: "문자열 처리·간단 구현",
  4: "정렬·해시(빈도수)",
  5: "스택·큐·그리디·정수론",
  6: "완전탐색·시뮬레이션",
  7: "이분탐색·투포인터·누적합·그리디",
  8: "그래프 탐색(BFS/DFS)",
  9: "동적계획법(DP)",
  10: "그래프 응용·고급 DP",
};

/**
 * 저장소 루트의 level-XX 폴더와 그 안의 문제 폴더를 스캔한다.
 * solution.test.ts가 없는 문제 폴더, 문제가 하나도 없는 레벨은 제외한다.
 */
export function scanLevels(rootDir) {
  return readdirSync(rootDir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && /^level-\d+$/.test(e.name))
    .map((e) => {
      const levelNo = Number(e.name.slice("level-".length));
      const levelPath = join(rootDir, e.name);
      const problems = readdirSync(levelPath, { withFileTypes: true })
        .filter(
          (p) =>
            p.isDirectory() &&
            existsSync(join(levelPath, p.name, "solution.test.ts")),
        )
        .map((p) => ({ name: p.name, relPath: `${e.name}/${p.name}` }))
        .sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { numeric: true }),
        );
      return {
        levelDir: e.name,
        levelNo,
        label: LEVEL_LABELS[levelNo] ?? "",
        problems,
      };
    })
    .filter((l) => l.problems.length > 0)
    .sort((a, b) => a.levelNo - b.levelNo);
}

/** 메뉴 선택 결과를 `vitest` 실행 인자로 변환한다. */
export function buildVitestArgs(selection) {
  switch (selection.type) {
    case "all":
      return ["run"];
    case "level":
      return ["run", selection.levelDir];
    case "problem":
      return ["run", selection.relPath];
    default:
      throw new Error(`알 수 없는 선택입니다: ${JSON.stringify(selection)}`);
  }
}
