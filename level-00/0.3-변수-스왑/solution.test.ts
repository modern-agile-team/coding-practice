import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("0.3 변수 스왑", () => {
  it("숫자 두 개의 순서를 바꾼다", () => {
    expect(solution(1, 2)).toEqual([2, 1]);
  });

  it("문자열도 순서를 바꾼다", () => {
    expect(solution("a", "b")).toEqual(["b", "a"]);
  });

  it("같은 값이어도 동작한다", () => {
    expect(solution(5, 5)).toEqual([5, 5]);
  });
});
