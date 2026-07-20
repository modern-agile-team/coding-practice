import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("1.8 절댓값의 합", () => {
  it("음수의 절댓값을 더한다", () => {
    expect(solution([-3, 4, -1])).toBe(8);
  });

  it("빈 배열은 0", () => {
    expect(solution([])).toBe(0);
  });

  it("모두 양수", () => {
    expect(solution([1, 2, 3])).toBe(6);
  });
});
