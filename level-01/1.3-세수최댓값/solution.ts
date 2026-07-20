/**
 * 1.3 세 수의 최댓값  [프로그래머스 Lv0 / 백준 Bronze V]
 *
 * 세 정수 a, b, c 중 가장 큰 값을 반환하세요.
 *
 * @example
 * solution(3, 7, 5) // => 7
 */
export function solution(a: number, b: number, c: number): number {
  return Math.max(...[a, b, c]);
}
