import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("7.5 구간 합 질의 (누적합)", () => {
  it("여러 질의의 구간 합을 순서대로 반환한다", () => {
    expect(solution([1, 2, 3, 4, 5], [[0, 2], [1, 3], [0, 4]])).toEqual([6, 9, 15]);
  });

  it("단일 원소 구간을 처리한다", () => {
    expect(solution([10, 20, 30], [[1, 1]])).toEqual([20]);
  });

  it("음수가 섞여 있어도 계산한다", () => {
    expect(solution([3, -1, 4, -2], [[0, 3], [1, 2]])).toEqual([4, 3]);
  });

  it("성능: 길이 200,000 배열에 질의 1,000,000개를 시간 내에 처리한다", () => {
    const n = 200_000;
    const numbers = Array.from({ length: n }, (_, i) => (i * 31) % 1000);
    const queries: [number, number][] = [];
    for (let k = 0; k < 1_000_000; k++) {
      const l = (k * 13) % n;
      const r = Math.min(n - 1, l + ((k * 97) % n));
      queries.push([l, r]);
    }
    const prefix = new Array<number>(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + numbers[i];

    const result = solution(numbers, queries);
    let wrong = 0;
    for (let k = 0; k < queries.length; k++) {
      const [l, r] = queries[k];
      if (result[k] !== prefix[r + 1] - prefix[l]) wrong++;
    }
    expect(wrong).toBe(0);
  });
});
