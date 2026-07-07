import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("6.5 달팽이 배열", () => {
  it("n=3", () => {
    expect(solution(3)).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
  });

  it("n=1", () => {
    expect(solution(1)).toEqual([[1]]);
  });

  it("n=4 첫 줄", () => {
    expect(solution(4)[0]).toEqual([1, 2, 3, 4]);
  });
});
