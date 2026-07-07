import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("0.6 나머지 매개변수 (rest parameter)", () => {
  it("여러 인자의 합", () => {
    expect(solution(1, 2, 3)).toBe(6);
  });

  it("인자 하나", () => {
    expect(solution(10)).toBe(10);
  });

  it("인자가 없으면 0", () => {
    expect(solution()).toBe(0);
  });
});
