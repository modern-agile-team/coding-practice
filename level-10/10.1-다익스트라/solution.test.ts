import { describe, it, expect } from "vitest";
import { solution, type Edge } from "./solution";

describe("10.1 다익스트라 최단 경로", () => {
  it("우회 경로가 더 짧으면 그쪽을 선택한다", () => {
    expect(
      solution(4, [[0, 1, 1], [0, 2, 5], [1, 2, 2], [2, 3, 1]], 0),
    ).toEqual([0, 1, 3, 4]);
  });

  it("도달할 수 없는 정점은 Infinity다", () => {
    expect(solution(3, [[0, 1, 4]], 0)).toEqual([0, 4, Infinity]);
  });

  it("같은 두 정점을 잇는 간선이 여러 개면 짧은 것을 쓴다", () => {
    expect(solution(2, [[0, 1, 7], [0, 1, 3]], 0)).toEqual([0, 3]);
  });

  it("가중치 0인 간선도 처리한다", () => {
    expect(solution(3, [[0, 1, 0], [1, 2, 2]], 0)).toEqual([0, 0, 2]);
  });

  it("성능: 정점 100,000개, 간선 300,000개를 시간 내에 처리한다", () => {
    const V = 100_000;
    const edges: Edge[] = [];
    // 체인: i → i+1, 가중치 (i % 10) + 1 — 최단 거리는 누적 합
    const expected = new Array<number>(V);
    expected[0] = 0;
    for (let i = 0; i < V - 1; i++) {
      const w = (i % 10) + 1;
      edges.push([i, i + 1, w]);
      expected[i + 1] = expected[i] + w;
    }
    // 최단 거리를 절대 개선하지 못하는 지름길 200,000개
    for (let k = 0; k < 200_000; k++) {
      const a = (k * 37) % (V - 1);
      const span = 1 + ((k * 101) % Math.min(50, V - 1 - a));
      const b = a + span;
      edges.push([a, b, expected[b] - expected[a] + 1]);
    }

    const result = solution(V, edges, 0);
    let wrong = 0;
    for (let i = 0; i < V; i++) if (result[i] !== expected[i]) wrong++;
    expect(wrong).toBe(0);
  });
});
