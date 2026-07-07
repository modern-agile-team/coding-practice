import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("6.2 조합으로 만드는 합의 종류", () => {
  it("2개 조합", () => {
    expect(solution([1, 2, 3], 2)).toBe(3);
  });

  it("1개 선택", () => {
    expect(solution([1, 2, 3], 1)).toBe(3);
  });

  it("합이 겹치는 경우는 한 가지", () => {
    expect(solution([2, 4], 2)).toBe(1);
  });

  it("k=0이면 합 0 한 가지", () => {
    expect(solution([1, 2, 3], 0)).toBe(1);
  });
});
