/**
 * 1.5 윤년 판별  [프로그래머스 Lv0 / 백준 Bronze V]
 *
 * 연도 year가 윤년이면 true, 아니면 false를 반환하세요.
 * 윤년은 4의 배수이면서, 100의 배수가 아니거나 400의 배수인 해입니다.
 *
 * @example
 * solution(2024) // => true
 * solution(1900) // => false
 */
export function solution(year: number): boolean {
  return new Date(year, 2, 0).getDate() === 29;
}
