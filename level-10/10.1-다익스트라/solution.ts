/**
 * 10.1 다익스트라 최단 경로  [프로그래머스 Lv3 / 백준 Gold IV]
 *
 * 정점 수 n(0..n-1), 방향 간선 목록 edges, 시작 정점 start가 주어질 때,
 * start에서 각 정점까지의 최단 거리 배열(길이 n)을 반환하세요.
 * 자기 자신까지는 0, 도달할 수 없는 정점은 Infinity입니다.
 * 가중치는 0 이상이며, n은 최대 100,000 / 간선은 최대 300,000개입니다.
 *
 * @example
 * solution(4, [[0, 1, 1], [0, 2, 5], [1, 2, 2], [2, 3, 1]], 0) // => [0, 1, 3, 4]
 */
export type Edge = [from: number, to: number, weight: number];

export function solution(n: number, edges: Edge[], start: number): number[] {
  // TODO: 구현하세요
  throw new Error("아직 구현되지 않았습니다");
}
