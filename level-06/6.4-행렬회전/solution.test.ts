import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("6.4 행렬 90도 회전", () => {
  it("2x2 회전", () => {
    expect(solution([[1, 2], [3, 4]])).toEqual([[3, 1], [4, 2]]);
  });

  it("2x3 회전 → 3x2", () => {
    expect(solution([[1, 2, 3], [4, 5, 6]])).toEqual([[4, 1], [5, 2], [6, 3]]);
  });

  it("원본을 변경하지 않는다", () => {
    const m = [[1, 2], [3, 4]];
    solution(m);
    expect(m).toEqual([[1, 2], [3, 4]]);
  });
});
