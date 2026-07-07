import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("8.2 연결 요소의 개수", () => {
  it("두 그룹", () => {
    expect(solution(5, [[0, 1], [1, 2], [3, 4]])).toBe(2);
  });

  it("간선이 없으면 정점 수만큼", () => {
    expect(solution(3, [])).toBe(3);
  });

  it("모두 연결", () => {
    expect(solution(4, [[0, 1], [1, 2], [2, 3]])).toBe(1);
  });
});
