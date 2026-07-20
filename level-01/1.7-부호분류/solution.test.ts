import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("1.7 부호 분류", () => {
  it("양수/음수/0을 센다", () => {
    expect(solution([1, -2, 0, 3, 0, -5])).toEqual({
      positive: 2,
      negative: 2,
      zero: 2,
    });
  });

  it("빈 배열은 모두 0", () => {
    expect(solution([])).toEqual({ positive: 0, negative: 0, zero: 0 });
  });
});
