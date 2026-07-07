/**
 * 10.3 유니온 파인드  [프로그래머스 Lv3 / 백준 Gold IV]
 *
 * 원소 수 n(0..n-1)과 연산 목록 ops를 받습니다.
 * - ["union", a, b]: a와 b가 속한 집합을 합친다
 * - ["find", a, b]: a와 b가 같은 집합인지 boolean을 결과에 추가한다
 * "find" 연산들의 결과를 순서대로 모은 배열을 반환하세요.
 *
 * @example
 * solution(4, [["union", 0, 1], ["union", 2, 3], ["find", 0, 1], ["find", 0, 2]])
 * // => [true, false]
 */
export type UnionFindOp =
  | ["union", number, number]
  | ["find", number, number];

export function solution(n: number, ops: UnionFindOp[]): boolean[] {
  // TODO: 구현하세요
  throw new Error("아직 구현되지 않았습니다");
}
