import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("0.5 기본 매개변수 (default parameter)", () => {
  it("greeting을 생략하면 기본값이 쓰인다", () => {
    expect(solution("민수")).toBe("안녕하세요, 민수님!");
  });

  it("greeting을 지정하면 그 값이 쓰인다", () => {
    expect(solution("민수", "반가워요")).toBe("반가워요, 민수님!");
  });
});
