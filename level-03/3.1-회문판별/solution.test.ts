import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("3.1 회문 판별", () => {
  it("단순 회문을 판별한다", () => {
    expect(solution("level")).toBe(true);
  });

  it("대소문자를 구분하지 않는다", () => {
    expect(solution("Anna")).toBe(true);
  });

  it("공백을 무시하고 판별한다", () => {
    expect(solution("never odd or even")).toBe(true);
  });

  it("회문이 아니면 false를 반환한다", () => {
    expect(solution("hello")).toBe(false);
  });
});
