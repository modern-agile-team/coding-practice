import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("8.3 섬의 개수", () => {
  it("두 개의 섬", () => {
    expect(solution([
      [1, 1, 0, 0],
      [1, 0, 0, 1],
      [0, 0, 1, 1],
    ])).toBe(2);
  });

  it("섬이 없음", () => {
    expect(solution([[0, 0], [0, 0]])).toBe(0);
  });

  it("전부 땅이면 한 개", () => {
    expect(solution([[1, 1], [1, 1]])).toBe(1);
  });
});
