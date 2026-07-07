import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("0.1 자료형 타입 판별", () => {
  it("숫자", () => {
    expect(solution(42)).toBe("number");
  });

  it("문자열", () => {
    expect(solution("hi")).toBe("string");
  });

  it("불리언", () => {
    expect(solution(true)).toBe("boolean");
  });

  it("null은 'null'", () => {
    expect(solution(null)).toBe("null");
  });

  it("undefined", () => {
    expect(solution(undefined)).toBe("undefined");
  });

  it("배열은 'array'", () => {
    expect(solution([1, 2])).toBe("array");
  });

  it("객체는 'object'", () => {
    expect(solution({ a: 1 })).toBe("object");
  });
});
