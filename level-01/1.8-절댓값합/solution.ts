/**
 * 1.8 절댓값의 합  [프로그래머스 Lv0 / 백준 Bronze IV]
 *
 * 정수 배열을 받아 각 원소의 절댓값을 모두 더한 값을 반환하세요.
 *
 * @example
 * solution([-3, 4, -1]) // => 8
 */
export function solution(numbers: number[]): number {
  let num = 0;
  for (let i = 0; i < numbers.length; i++) {
    const num2 = Math.abs(numbers[i]);
    num += num2;
  }

  return num
}
