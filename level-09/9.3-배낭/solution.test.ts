import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("9.3 0/1 배낭 (Knapsack)", () => {
  it("백준 평범한 배낭 예제", () => {
    // 무게/가치: [6,13],[4,8],[3,6],[5,12], 용량 7 → 6+? : 무게4+무게3=7, 가치8+6=14
    expect(solution([[6, 13], [4, 8], [3, 6], [5, 12]], 7)).toBe(14);
  });

  it("용량 10", () => {
    // 무게4+무게6=10 → 8+13=21
    expect(solution([[6, 13], [4, 8], [3, 6], [5, 12]], 10)).toBe(21);
  });

  it("아무것도 못 담으면 0", () => {
    expect(solution([[5, 10]], 3)).toBe(0);
  });
});
