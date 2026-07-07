import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("2.1 약수의 합", () => {
  it("6의 약수의 합", () => {
    expect(solution(6)).toBe(12);
  });

  it("1의 약수의 합", () => {
    expect(solution(1)).toBe(1);
  });

  it("12의 약수의 합", () => {
    expect(solution(12)).toBe(28);
  });

  it("소수는 1 + 자기자신", () => {
    expect(solution(7)).toBe(8);
  });
});
