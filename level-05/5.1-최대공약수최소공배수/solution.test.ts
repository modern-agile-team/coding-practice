import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("5.1 최대공약수와 최소공배수", () => {
  it("한쪽이 다른 쪽의 배수인 경우를 계산한다", () => {
    expect(solution(3, 12)).toEqual({ gcd: 3, lcm: 12 });
  });

  it("공약수가 있는 두 수를 계산한다", () => {
    expect(solution(6, 8)).toEqual({ gcd: 2, lcm: 24 });
  });

  it("서로소는 gcd 1, lcm은 두 수의 곱이다", () => {
    expect(solution(7, 5)).toEqual({ gcd: 1, lcm: 35 });
  });
});
