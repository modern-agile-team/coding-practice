import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("4.3 K번째 수", () => {
  it("여러 명령 처리", () => {
    expect(
      solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]),
    ).toEqual([5, 6, 3]);
  });

  it("단일 명령", () => {
    expect(solution([3, 1, 2], [[1, 3, 1]])).toEqual([1]);
  });
});
