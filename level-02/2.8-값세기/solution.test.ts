import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("2.8 특정 값 세기", () => {
  it("2가 3번", () => {
    expect(solution([1, 2, 2, 3, 2], 2)).toBe(3);
  });

  it("없으면 0", () => {
    expect(solution([1, 2, 3], 9)).toBe(0);
  });
});
