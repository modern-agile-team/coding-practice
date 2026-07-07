import { describe, it, expect } from "vitest";
import { solution, type UnionFindOp } from "./solution";

describe("10.3 유니온 파인드", () => {
  it("union 후 find 결과", () => {
    const ops: UnionFindOp[] = [
      ["union", 0, 1],
      ["union", 2, 3],
      ["find", 0, 1],
      ["find", 0, 2],
    ];
    expect(solution(4, ops)).toEqual([true, false]);
  });

  it("연쇄 union으로 같은 집합", () => {
    const ops: UnionFindOp[] = [
      ["union", 0, 1],
      ["union", 1, 2],
      ["find", 0, 2],
    ];
    expect(solution(3, ops)).toEqual([true]);
  });

  it("자기 자신은 항상 같은 집합", () => {
    expect(solution(2, [["find", 1, 1]])).toEqual([true]);
  });
});
