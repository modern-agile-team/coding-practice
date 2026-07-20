import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("1.2 홀짝 판별", () => {
  it("홀수를 판별한다", () => {
    expect(solution(3)).toBe("홀수");
  });

  it("짝수를 판별한다", () => {
    expect(solution(4)).toBe("짝수");
  });

  it("0은 짝수로 판별한다", () => {
    expect(solution(0)).toBe("짝수");
  });

  it("음수 홀수도 판별한다", () => {
    expect(solution(-7)).toBe("홀수");
  });

  it("음수 짝수도 판별한다", () => {
    expect(solution(-4)).toBe("짝수");
  });
});
