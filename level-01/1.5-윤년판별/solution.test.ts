import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("1.5 윤년 판별", () => {
  it("400의 배수는 윤년", () => {
    expect(solution(2000)).toBe(true);
  });

  it("100의 배수지만 400의 배수가 아니면 평년", () => {
    expect(solution(1900)).toBe(false);
  });

  it("4의 배수 윤년", () => {
    expect(solution(2024)).toBe(true);
  });

  it("4의 배수가 아니면 평년", () => {
    expect(solution(2023)).toBe(false);
  });
});
