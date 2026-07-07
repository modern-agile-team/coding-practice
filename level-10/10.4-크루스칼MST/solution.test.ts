import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("10.4 최소 신장 트리 (크루스칼)", () => {
  it("MST 가중치 합", () => {
    expect(solution(4, [[0, 1, 1], [1, 2, 2], [0, 2, 2], [2, 3, 3]])).toBe(6);
  });

  it("연결되지 않으면 -1", () => {
    expect(solution(3, [[0, 1, 5]])).toBe(-1);
  });

  it("정점 1개는 0", () => {
    expect(solution(1, [])).toBe(0);
  });
});
