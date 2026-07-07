import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("7.6 좌표 압축", () => {
  it("백준 예제", () => {
    expect(solution([2, 4, -10, 4, -9])).toEqual([2, 3, 0, 3, 1]);
  });

  it("이미 정렬·고유", () => {
    expect(solution([10, 20, 30])).toEqual([0, 1, 2]);
  });

  it("모두 같은 값", () => {
    expect(solution([5, 5, 5])).toEqual([0, 0, 0]);
  });
});
