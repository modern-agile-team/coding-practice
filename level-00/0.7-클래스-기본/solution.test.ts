import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("0.7 클래스 기본", () => {
  it("속성을 보관한다", () => {
    const r = solution(3, 4);
    expect(r.width).toBe(3);
    expect(r.height).toBe(4);
  });

  it("area() 메서드로 넓이를 계산한다", () => {
    expect(solution(3, 4).area()).toBe(12);
    expect(solution(5, 5).area()).toBe(25);
  });
});
