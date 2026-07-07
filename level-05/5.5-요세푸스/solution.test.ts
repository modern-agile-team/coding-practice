import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("5.5 요세푸스 순열", () => {
  it("k칸씩 건너뛰며 제거 순서를 만든다", () => {
    expect(solution(7, 3)).toEqual([3, 6, 2, 7, 5, 1, 4]);
  });

  it("작은 원에서도 동작한다", () => {
    expect(solution(5, 2)).toEqual([2, 4, 1, 5, 3]);
  });

  it("k가 1이면 번호 순서대로 제거된다", () => {
    expect(solution(4, 1)).toEqual([1, 2, 3, 4]);
  });
});
