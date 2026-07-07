import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("8.1 격자 최단 거리 (BFS)", () => {
  it("벽을 우회하는 최단 이동 횟수를 구한다", () => {
    expect(solution([[0, 0, 0], [1, 1, 0], [0, 0, 0]], [0, 0], [2, 0])).toBe(6);
  });

  it("시작 칸과 목표 칸이 같으면 0을 반환한다", () => {
    expect(solution([[0]], [0, 0], [0, 0])).toBe(0);
  });

  it("도달할 수 없으면 -1을 반환한다", () => {
    expect(solution([[0, 1, 0]], [0, 0], [0, 2])).toBe(-1);
  });
});
