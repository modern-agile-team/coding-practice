import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("7.7 회의실 배정 (그리디)", () => {
  it("겹치지 않는 회의의 최대 개수를 구한다", () => {
    expect(
      solution([
        [1, 4], [3, 5], [0, 6], [5, 7], [3, 8], [5, 9],
        [6, 10], [8, 11], [8, 12], [2, 13], [12, 14],
      ]),
    ).toBe(4);
  });

  it("종료 시각과 시작 시각이 같으면 겹치지 않는 것으로 본다", () => {
    expect(solution([[1, 2], [2, 3], [3, 4]])).toBe(3);
  });

  it("모두 겹치면 1개만 가능하다", () => {
    expect(solution([[1, 10], [2, 9], [3, 8]])).toBe(1);
  });
});
