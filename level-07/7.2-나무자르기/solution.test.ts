import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("7.2 나무 자르기 (파라메트릭 서치)", () => {
  it("남는 목재 없이 딱 맞는 높이를 찾는다", () => {
    expect(solution([20, 15, 10, 17], 7)).toBe(15);
  });

  it("목재가 남더라도 조건을 만족하는 최대 높이를 찾는다", () => {
    expect(solution([4, 42, 40, 26, 46], 20)).toBe(36);
  });

  it("전체 목재를 다 얻어야 하면 0을 반환한다", () => {
    expect(solution([3, 1], 4)).toBe(0);
  });

  it("나무가 한 그루여도 동작한다", () => {
    expect(solution([10], 4)).toBe(6);
  });

  it("성능: 나무 1,000,000그루(높이 최대 10억)를 시간 내에 처리한다", () => {
    const n = 1_000_000;
    let seed = 42;
    const trees = new Array<number>(n);
    for (let i = 0; i < n; i++) {
      seed = (seed * 48271) % 2147483647;
      trees[i] = seed % 1_000_000_000;
    }
    // need는 전체 목재 합(470,804,517,200,111)의 1/4로 고정.
    // 기대값 497,169,356은 검증된 참조 구현으로 산출한 값이다.
    expect(solution(trees, 117_701_129_300_027)).toBe(497_169_356);
  });
});
