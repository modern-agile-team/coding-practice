import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("1.3 세 수의 최댓값", () => {
  it("일반적인 경우", () => {
    expect(solution(3, 7, 5)).toBe(7);
  });

  it("모두 음수", () => {
    expect(solution(-1, -9, -3)).toBe(-1);
  });

  it("같은 값이 섞인 경우", () => {
    expect(solution(5, 5, 2)).toBe(5);
  });
});
