import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("5.3 올바른 괄호", () => {
  it("나란한 괄호를 올바르다고 판별한다", () => {
    expect(solution("()()")).toBe(true);
  });

  it("중첩 괄호를 올바르다고 판별한다", () => {
    expect(solution("(())")).toBe(true);
  });

  it("닫는 괄호가 먼저 나오면 false를 반환한다", () => {
    expect(solution(")(")).toBe(false);
  });

  it("짝이 맞지 않으면 false를 반환한다", () => {
    expect(solution("(()")).toBe(false);
  });

  it("빈 문자열은 올바른 괄호로 본다", () => {
    expect(solution("")).toBe(true);
  });
});
