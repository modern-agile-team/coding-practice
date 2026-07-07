import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("3.5 숫자 영단어 변환", () => {
  it("one4seven => 147", () => {
    expect(solution("one4seven")).toBe(147);
  });

  it("23four => 234", () => {
    expect(solution("23four")).toBe(234);
  });

  it("숫자만 있는 경우", () => {
    expect(solution("100")).toBe(100);
  });

  it("zero 포함", () => {
    expect(solution("2zero")).toBe(20);
  });
});
