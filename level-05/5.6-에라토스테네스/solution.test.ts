import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("5.6 에라토스테네스의 체", () => {
  it("10 이하의 소수를 반환한다", () => {
    expect(solution(10)).toEqual([2, 3, 5, 7]);
  });

  it("20 이하의 소수를 반환한다", () => {
    expect(solution(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
  });

  it("n이 2면 [2]를 반환한다", () => {
    expect(solution(2)).toEqual([2]);
  });

  it("n이 1이면 빈 배열을 반환한다", () => {
    expect(solution(1)).toEqual([]);
  });

  it("n=1,000,000의 소수 개수는 78,498개다", () => {
    const primes = solution(1_000_000);
    expect(primes.length).toBe(78498);
    expect(primes[0]).toBe(2);
    expect(primes[primes.length - 1]).toBe(999983);
  });
});
