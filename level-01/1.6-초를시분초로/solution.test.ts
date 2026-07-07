import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("1.6 초를 시:분:초로", () => {
  it("3661초", () => {
    expect(solution(3661)).toBe("01:01:01");
  });

  it("0을 두 자리로 채운다", () => {
    expect(solution(59)).toBe("00:00:59");
  });

  it("0초", () => {
    expect(solution(0)).toBe("00:00:00");
  });

  it("24시간을 넘어가는 경우", () => {
    expect(solution(90000)).toBe("25:00:00");
  });
});
