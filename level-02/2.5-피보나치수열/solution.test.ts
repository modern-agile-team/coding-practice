import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("2.5 피보나치 수열", () => {
  it("앞에서 7개", () => {
    expect(solution(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
  });

  it("1개는 [0]", () => {
    expect(solution(1)).toEqual([0]);
  });

  it("2개는 [0, 1]", () => {
    expect(solution(2)).toEqual([0, 1]);
  });

  it("0개는 빈 배열", () => {
    expect(solution(0)).toEqual([]);
  });
});
