import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("5.4 후위 표기식 계산", () => {
  it("덧셈을 계산한다", () => {
    expect(solution(["3", "4", "+"])).toBe(7);
  });

  it("괄호 효과를 계산한다", () => {
    expect(solution(["5", "1", "2", "+", "*"])).toBe(15);
  });

  it("뺄셈·나눗셈은 피연산자 순서를 지킨다", () => {
    // (10 - 2) / 3 = 2 (0 방향 버림)
    expect(solution(["10", "2", "-", "3", "/"])).toBe(2);
  });
});
