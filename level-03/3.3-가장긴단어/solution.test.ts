import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("3.3 가장 긴 단어", () => {
  it("가장 긴 단어", () => {
    expect(solution("the quick brown fox")).toBe("quick");
  });

  it("길이가 같으면 먼저 등장한 단어", () => {
    expect(solution("aa bb cc")).toBe("aa");
  });

  it("ccc", () => {
    expect(solution("a bb ccc dd")).toBe("ccc");
  });

  it("빈 문자열", () => {
    expect(solution("")).toBe("");
  });
});
