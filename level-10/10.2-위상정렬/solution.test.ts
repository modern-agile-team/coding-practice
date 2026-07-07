import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("10.2 위상 정렬", () => {
  it("DAG를 사전순 최소로 정렬한다", () => {
    expect(solution(4, [[0, 1], [0, 2], [1, 3], [2, 3]])).toEqual([0, 1, 2, 3]);
  });

  it("사이클이 있으면 빈 배열을 반환한다", () => {
    expect(solution(2, [[0, 1], [1, 0]])).toEqual([]);
  });

  it("간선이 없으면 번호 순서다", () => {
    expect(solution(3, [])).toEqual([0, 1, 2]);
  });

  it("나중에 풀린 작은 번호가 먼저 나온다 (사전순 최소)", () => {
    // 2를 처리해야 1이 풀린다. 사전순 최소는 [0, 2, 1, 3, 4, 5]이고,
    // 단순 FIFO 큐는 [0, 2, 3, 4, 5, 1]을 만든다.
    expect(solution(6, [[2, 1]])).toEqual([0, 2, 1, 3, 4, 5]);
  });
});
