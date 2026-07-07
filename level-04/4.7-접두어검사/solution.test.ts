import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("4.7 전화번호 접두어 검사", () => {
  it("접두어인 번호가 있으면 false를 반환한다", () => {
    expect(solution(["119", "97674223", "1195524421"])).toBe(false);
  });

  it("접두어인 번호가 없으면 true를 반환한다", () => {
    expect(solution(["123", "456", "789"])).toBe(true);
  });

  it("연쇄된 접두어 관계도 찾아낸다", () => {
    expect(solution(["12", "123", "1235", "567", "88"])).toBe(false);
  });

  it("완전히 같은 번호도 접두어로 본다", () => {
    expect(solution(["119", "119"])).toBe(false);
  });
});
