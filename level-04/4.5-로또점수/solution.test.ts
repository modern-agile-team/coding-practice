import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("4.5 로또의 최고/최저 순위", () => {
  it("와일드카드 0의 최고/최저를 계산한다", () => {
    expect(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toEqual([3, 5]);
  });

  it("모두 0이면 최고 1등, 최저 6등이다", () => {
    expect(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])).toEqual([1, 6]);
  });

  it("0이 없으면 최고와 최저가 같다", () => {
    expect(solution([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12])).toEqual([6, 6]);
  });
});
