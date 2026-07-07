import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("9.4 동전 교환 경우의 수 (DP)", () => {
  it("5를 만드는 방법은 4가지", () => {
    expect(solution([1, 2, 5], 5)).toBe(4);
  });

  it("만들 수 없으면 0", () => {
    expect(solution([2], 3)).toBe(0);
  });

  it("금액 0은 1가지", () => {
    expect(solution([1, 2, 5], 0)).toBe(1);
  });
});
