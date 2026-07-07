import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("9.5 최장 공통 부분 수열 (LCS)", () => {
  it("백준 예제", () => {
    expect(solution("ACAYKP", "CAPCAK")).toBe(4);
  });

  it("완전 동일", () => {
    expect(solution("abc", "abc")).toBe(3);
  });

  it("공통 없음", () => {
    expect(solution("abc", "xyz")).toBe(0);
  });
});
