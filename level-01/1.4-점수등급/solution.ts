/**
 * 1.4 점수 등급  [프로그래머스 Lv0 / 백준 Bronze V]
 *
 * 시험 점수(0~100)를 받아 등급을 반환하세요.
 * 90 이상 "A", 80 이상 "B", 70 이상 "C", 60 이상 "D", 그 외 "F"입니다.
 *
 * @example
 * solution(73) // => "C"
 */
export function solution(score: number): "A" | "B" | "C" | "D" | "F" {
  return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F"
}
