import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("8.5 토마토 (다중 시작 BFS)", () => {
  it("한 모서리에서 퍼지는 일수를 구한다", () => {
    expect(solution([[0, 0, 0], [0, 0, 0], [0, 0, 1]])).toBe(4);
  });

  it("여러 곳에서 동시에 퍼진다", () => {
    expect(solution([[1, 0, 0, 0, 1]])).toBe(2);
  });

  it("고립된 토마토가 있으면 -1을 반환한다", () => {
    expect(solution([[0, -1], [-1, 1]])).toBe(-1);
  });

  it("처음부터 모두 익어 있으면 0을 반환한다", () => {
    expect(solution([[1, 1], [1, 1]])).toBe(0);
  });
});
