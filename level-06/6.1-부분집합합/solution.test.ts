import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("6.1 부분집합의 합", () => {
  it("합을 만들 수 있음", () => {
    expect(solution([1, 2, 3], 5)).toBe(true);
  });

  it("합을 만들 수 없음", () => {
    expect(solution([1, 2, 3], 7)).toBe(false);
  });

  it("target 0은 공집합으로 true", () => {
    expect(solution([1, 2, 3], 0)).toBe(true);
  });

  it("단일 원소", () => {
    expect(solution([5], 5)).toBe(true);
  });
});
