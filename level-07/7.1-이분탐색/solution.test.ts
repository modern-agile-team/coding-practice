import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("7.1 이분 탐색", () => {
  it("존재하는 값의 인덱스를 찾는다", () => {
    expect(solution([1, 3, 5, 7, 9], 7)).toBe(3);
  });

  it("양 끝 값도 찾는다", () => {
    expect(solution([1, 3, 5, 7, 9], 1)).toBe(0);
    expect(solution([1, 3, 5, 7, 9], 9)).toBe(4);
  });

  it("없는 값은 -1을 반환한다", () => {
    expect(solution([1, 3, 5, 7, 9], 4)).toBe(-1);
  });

  it("성능: 길이 1,000,000 배열에서 질의 100,000개를 시간 내에 처리한다", () => {
    const n = 1_000_000;
    const sorted = Array.from({ length: n }, (_, i) => i * 2);
    let wrong = 0;
    for (let q = 0; q < 100_000; q++) {
      const target = (q * 7919) % (2 * n); // 짝수면 존재, 홀수면 부재
      const expected = target % 2 === 0 ? target / 2 : -1;
      if (solution(sorted, target) !== expected) wrong++;
    }
    expect(wrong).toBe(0);
  });
});
