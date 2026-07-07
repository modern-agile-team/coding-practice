import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("2.7 자릿수의 합", () => {
  it("123 => 6", () => {
    expect(solution(123)).toBe(6);
  });

  it("0 => 0", () => {
    expect(solution(0)).toBe(0);
  });

  it("9999 => 36", () => {
    expect(solution(9999)).toBe(36);
  });
});
