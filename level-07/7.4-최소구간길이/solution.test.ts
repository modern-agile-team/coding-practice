import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("7.4 합이 S 이상인 최소 구간 길이", () => {
  it("백준 예제", () => {
    expect(solution([5, 1, 3, 5, 10, 7, 4, 9, 2, 8], 15)).toBe(2);
  });

  it("만들 수 없으면 0", () => {
    expect(solution([1, 1, 1], 10)).toBe(0);
  });

  it("한 원소로 충족", () => {
    expect(solution([1, 100, 1], 100)).toBe(1);
  });
});
