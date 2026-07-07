import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("0.8 클래스와 상태 (Counter)", () => {
  it("증가/감소/조회", () => {
    const c = solution(0);
    c.increment();
    c.increment();
    expect(c.value()).toBe(2);
    c.decrement();
    expect(c.value()).toBe(1);
  });

  it("시작값을 반영한다", () => {
    const c = solution(10);
    expect(c.value()).toBe(10);
  });

  it("인스턴스끼리 상태가 독립적이다", () => {
    const a = solution(0);
    const b = solution(100);
    a.increment();
    expect(a.value()).toBe(1);
    expect(b.value()).toBe(100);
  });
});
