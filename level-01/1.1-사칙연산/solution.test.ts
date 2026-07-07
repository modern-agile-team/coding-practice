import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("1.1 사칙연산", () => {
  it("기본 사칙연산", () => {
    expect(solution(7, 2)).toEqual({ add: 9, sub: 5, mul: 14, div: 3 });
  });

  it("음수가 섞인 경우 몫은 0 방향으로 버린다", () => {
    expect(solution(-7, 2)).toEqual({ add: -5, sub: -9, mul: -14, div: -3 });
  });

  it("나누어떨어지는 경우", () => {
    expect(solution(10, 5)).toEqual({ add: 15, sub: 5, mul: 50, div: 2 });
  });
});
