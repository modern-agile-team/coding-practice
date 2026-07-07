import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("0.4 함수 기본", () => {
  it("넓이와 둘레", () => {
    expect(solution(3, 4)).toEqual({ area: 12, perimeter: 14 });
  });

  it("정사각형", () => {
    expect(solution(5, 5)).toEqual({ area: 25, perimeter: 20 });
  });
});
