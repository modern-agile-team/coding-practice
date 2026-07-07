import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("8.4 미로 탈출 (BFS)", () => {
  it("최소로 지나는 칸 수를 구한다", () => {
    expect(solution(["S..", "##.", "..E"])).toBe(5);
  });

  it("S와 E가 붙어 있으면 두 칸을 지난다", () => {
    expect(solution(["SE"])).toBe(2);
  });

  it("벽에 막혀 도달할 수 없으면 -1을 반환한다", () => {
    expect(solution(["S#E"])).toBe(-1);
  });
});
