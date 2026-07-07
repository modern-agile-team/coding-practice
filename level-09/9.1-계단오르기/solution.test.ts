import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("9.1 계단 오르기 경우의 수 (DP)", () => {
  it("1칸은 1가지다", () => {
    expect(solution(1)).toBe(1);
  });

  it("2칸은 2가지다", () => {
    expect(solution(2)).toBe(2);
  });

  it("3칸은 3가지다", () => {
    expect(solution(3)).toBe(3);
  });

  it("칸이 늘면 경우의 수가 피보나치처럼 늘어난다", () => {
    expect(solution(5)).toBe(8);
    expect(solution(10)).toBe(89);
  });
});
