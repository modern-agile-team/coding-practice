import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("5.2 동전 최소 개수 (그리디)", () => {
  it("최소 개수로 금액을 만든다", () => {
    expect(solution([500, 100, 50, 10], 1260)).toBe(6);
  });

  it("만들 수 없으면 -1을 반환한다", () => {
    expect(solution([3], 10)).toBe(-1);
  });

  it("0원은 0개다", () => {
    expect(solution([500, 100], 0)).toBe(0);
  });
});
