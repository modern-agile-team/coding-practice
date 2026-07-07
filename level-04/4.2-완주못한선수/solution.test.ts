import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("4.2 완주하지 못한 선수", () => {
  it("동명이인 처리", () => {
    expect(
      solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]),
    ).toBe("mislav");
  });

  it("한 명만 빠진 경우", () => {
    expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe("leo");
  });
});
