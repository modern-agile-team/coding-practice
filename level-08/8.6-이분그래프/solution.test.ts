import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("8.6 이분 그래프 판별", () => {
  it("경로 그래프는 이분 그래프다", () => {
    expect(solution(4, [[0, 1], [1, 2], [2, 3]])).toBe(true);
  });

  it("홀수 사이클은 이분 그래프가 아니다", () => {
    expect(solution(3, [[0, 1], [1, 2], [2, 0]])).toBe(false);
  });

  it("짝수 사이클은 이분 그래프다", () => {
    expect(solution(4, [[0, 1], [1, 2], [2, 3], [3, 0]])).toBe(true);
  });

  it("연결되지 않은 컴포넌트가 모두 이분이면 true다", () => {
    // 컴포넌트 {0,1} 경로 + {2,3,4,5} 짝수 사이클 + 고립 정점 6
    expect(
      solution(7, [[0, 1], [2, 3], [3, 4], [4, 5], [5, 2]]),
    ).toBe(true);
  });

  it("한 컴포넌트라도 이분이 아니면 false다", () => {
    // 컴포넌트 {0,1} 경로 + {2,3,4} 홀수 사이클
    expect(solution(5, [[0, 1], [2, 3], [3, 4], [4, 2]])).toBe(false);
  });
});
