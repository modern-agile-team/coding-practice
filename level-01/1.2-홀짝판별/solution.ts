/**
 * 1.2 홀짝 판별  [프로그래머스 Lv0 / 백준 Bronze V]
 *
 * 정수 n이 홀수면 "홀수", 짝수면 "짝수"를 반환하세요. (0은 짝수)
 *
 * @example
 * solution(3) // => "홀수"
 */
export function solution(n: number): "홀수" | "짝수" {
  return n % 2 === 0 ? "짝수" : "홀수";
}
