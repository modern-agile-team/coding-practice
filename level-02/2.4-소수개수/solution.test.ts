import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("2.4 소수 개수", () => {
  it("10 이하 소수는 4개", () => {
    expect(solution(10)).toBe(4);
  });

  it("1 이하는 0개", () => {
    expect(solution(1)).toBe(0);
  });

  it("2는 1개", () => {
    expect(solution(2)).toBe(1);
  });

  it("100 이하 소수는 25개", () => {
    expect(solution(100)).toBe(25);
  });
});
