import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("4.4 두 배열의 교집합", () => {
  it("중복 제거하고 정렬", () => {
    expect(solution([1, 2, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  it("교집합 없음", () => {
    expect(solution([1, 2], [3, 4])).toEqual([]);
  });
});
