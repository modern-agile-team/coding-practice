import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("0.2 참과 거짓 (truthy / falsy)", () => {
  it("0이 아닌 숫자는 참으로 판별한다", () => {
    expect(solution(1)).toBe(true);
  });

  it("내용 있는 문자열은 참으로 판별한다", () => {
    expect(solution("hi")).toBe(true);
  });

  it("0은 거짓으로 판별한다", () => {
    expect(solution(0)).toBe(false);
  });

  it("빈 문자열은 거짓으로 판별한다", () => {
    expect(solution("")).toBe(false);
  });

  it("null과 undefined는 거짓으로 판별한다", () => {
    expect(solution(null)).toBe(false);
    expect(solution(undefined)).toBe(false);
  });

  it("NaN은 거짓으로 판별한다", () => {
    expect(solution(NaN)).toBe(false);
  });

  it('문자열 "0"은 참으로 판별한다', () => {
    expect(solution("0")).toBe(true);
  });

  it("빈 배열과 빈 객체는 참으로 판별한다", () => {
    expect(solution([])).toBe(true);
    expect(solution({})).toBe(true);
  });
});
