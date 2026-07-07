import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("7.3 두 수의 합 (투 포인터)", () => {
  it("합이 target인 인덱스 쌍을 찾는다", () => {
    expect(solution([1, 2, 4, 7, 11], 9)).toEqual([1, 3]);
  });

  it("없으면 null을 반환한다", () => {
    expect(solution([1, 2, 3], 100)).toBeNull();
  });

  it("양 끝 원소의 쌍도 찾는다", () => {
    expect(solution([1, 5], 6)).toEqual([0, 1]);
  });

  it("답이 여러 쌍이면 i가 가장 작은 쌍을 반환한다", () => {
    // (0,4)=1+5, (1,3)=2+4 → i가 작은 [0, 4]
    expect(solution([1, 2, 3, 4, 5], 6)).toEqual([0, 4]);
  });

  it("같은 값이 여러 개면 i가 가장 작고 j가 가장 큰 쌍을 반환한다", () => {
    expect(solution([3, 3, 3], 6)).toEqual([0, 2]);
  });
});
