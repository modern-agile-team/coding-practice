import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("3.6 행렬 대각선 합", () => {
  it("2x2", () => {
    expect(solution([[1, 2], [3, 4]])).toBe(10);
  });

  it("3x3은 가운데를 한 번만 더한다", () => {
    expect(solution([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(25);
  });

  it("1x1", () => {
    expect(solution([[7]])).toBe(7);
  });
});
