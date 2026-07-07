import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("9.2 가장 긴 증가 부분 수열 (LIS)", () => {
  it("가장 긴 증가 부분 수열의 길이를 구한다", () => {
    expect(solution([10, 20, 10, 30, 20, 50])).toBe(4);
  });

  it("감소 수열의 LIS는 1이다", () => {
    expect(solution([3, 2, 1])).toBe(1);
  });

  it("같은 값은 증가로 세지 않는다", () => {
    expect(solution([1, 1, 1])).toBe(1);
  });

  it("빈 배열은 0이다", () => {
    expect(solution([])).toBe(0);
  });

  it("성능: 길이 5,000 배열을 시간 내에 처리한다", () => {
    const n = 5000;
    const numbers = Array.from({ length: n }, (_, i) => (i * 7919) % 10007);
    // 기대값 63은 검증된 참조 구현으로 산출한 값이다.
    expect(solution(numbers)).toBe(63);
  });
});
