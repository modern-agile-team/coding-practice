import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("4.1 최빈값", () => {
  it("동률이면 작은 값", () => {
    expect(solution([1, 2, 2, 3, 3])).toBe(2);
  });

  it("명확한 최빈값", () => {
    expect(solution([5, 5, 5, 1])).toBe(5);
  });

  it("모두 한 번씩이면 가장 작은 값", () => {
    expect(solution([4, 2, 7])).toBe(2);
  });
});
