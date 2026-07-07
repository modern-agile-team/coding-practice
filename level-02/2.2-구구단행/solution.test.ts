import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("2.2 구구단 한 행", () => {
  it("2단", () => {
    expect(solution(2)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
  });

  it("9단", () => {
    expect(solution(9)).toEqual([9, 18, 27, 36, 45, 54, 63, 72, 81]);
  });
});
