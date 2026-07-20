import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("1.4 점수 등급", () => {
  it("구간 가운데 점수의 등급을 반환한다", () => {
    expect(solution(95)).toBe("A");
    expect(solution(85)).toBe("B");
    expect(solution(73)).toBe("C");
    expect(solution(65)).toBe("D");
    expect(solution(40)).toBe("F");
  });

  it("경계값은 위 등급에 속한다", () => {
    expect(solution(90)).toBe("A");
    expect(solution(80)).toBe("B");
    expect(solution(70)).toBe("C");
    expect(solution(60)).toBe("D");
  });

  it("경계 바로 아래는 아래 등급에 속한다", () => {
    expect(solution(89)).toBe("B");
    expect(solution(79)).toBe("C");
    expect(solution(69)).toBe("D");
    expect(solution(59)).toBe("F");
  });

  it("최고점 100은 A, 최저점 0은 F다", () => {
    expect(solution(100)).toBe("A");
    expect(solution(0)).toBe("F");
  });
});
