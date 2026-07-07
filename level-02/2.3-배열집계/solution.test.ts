import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("2.3 배열 집계", () => {
  it("min/max/sum/avg", () => {
    expect(solution([1, 2, 3, 4])).toEqual({ min: 1, max: 4, sum: 10, avg: 2.5 });
  });

  it("원소가 하나", () => {
    expect(solution([5])).toEqual({ min: 5, max: 5, sum: 5, avg: 5 });
  });
});
