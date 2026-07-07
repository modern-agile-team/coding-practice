import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("3.7 문자 빈도 정렬", () => {
  it("빈도 내림차순", () => {
    expect(solution("banana")).toEqual(["a", "n", "b"]);
  });

  it("동률은 사전순", () => {
    expect(solution("aabb")).toEqual(["a", "b"]);
  });

  it("빈 문자열", () => {
    expect(solution("")).toEqual([]);
  });
});
