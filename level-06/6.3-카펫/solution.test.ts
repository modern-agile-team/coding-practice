import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("6.3 카펫", () => {
  it("brown=10, yellow=2", () => {
    expect(solution(10, 2)).toEqual([4, 3]);
  });

  it("brown=8, yellow=1", () => {
    expect(solution(8, 1)).toEqual([3, 3]);
  });

  it("brown=24, yellow=24", () => {
    expect(solution(24, 24)).toEqual([8, 6]);
  });
});
