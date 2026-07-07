import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("10.5 격자 최대 경로 합 (2D DP)", () => {
  it("3x3", () => {
    expect(solution([[1, 3, 1], [1, 5, 1], [4, 2, 1]])).toBe(12);
  });

  it("1x1", () => {
    expect(solution([[5]])).toBe(5);
  });

  it("한 행", () => {
    expect(solution([[1, 2, 3]])).toBe(6);
  });
});
