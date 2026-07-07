import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("3.2 문자열 압축 길이", () => {
  it("aaabb => 4", () => {
    expect(solution("aaabb")).toBe(4);
  });

  it("abc => 6", () => {
    expect(solution("abc")).toBe(6);
  });

  it("aaaa => 2", () => {
    expect(solution("aaaa")).toBe(2);
  });

  it("빈 문자열 => 0", () => {
    expect(solution("")).toBe(0);
  });
});
