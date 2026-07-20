/**
 * 1.1 사칙연산  [프로그래머스 Lv0 / 백준 Bronze V]
 *
 * 두 정수 a, b의 합(add)·차(sub)·곱(mul)·몫(div)을 객체로 반환하세요.
 * 몫은 0 방향으로 버림한 정수입니다. b는 0이 아님이 보장됩니다.
 *
 * @example
 * solution(7, 2) // => { add: 9, sub: 5, mul: 14, div: 3 }
 */
export interface ArithmeticResult {
  add: number;
  sub: number;
  mul: number;
  div: number;
}

export function solution(a: number, b: number): ArithmeticResult {
  return {
    add: a + b,
    sub: a - b,
    mul: a * b,
    div: Math.trunc(a / b)
  }
}
