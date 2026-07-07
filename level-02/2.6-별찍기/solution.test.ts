import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("2.6 별 찍기 (오른쪽 정렬)", () => {
  it("n=3", () => {
    expect(solution(3)).toEqual(["  *", " **", "***"]);
  });

  it("n=1", () => {
    expect(solution(1)).toEqual(["*"]);
  });
});
