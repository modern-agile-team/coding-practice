import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("4.8 애너그램 그룹", () => {
  it("애너그램끼리 묶는다", () => {
    expect(solution(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"],
    ]);
  });

  it("애너그램이 없으면 각각 단독 그룹이다", () => {
    expect(solution(["abc", "def"])).toEqual([["abc"], ["def"]]);
  });
});
