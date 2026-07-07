import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("3.4 시저 암호", () => {
  it("대문자를 뒤로 민다", () => {
    expect(solution("AB", 1)).toBe("BC");
  });

  it("'z'를 넘어가면 'a'로 순환한다", () => {
    expect(solution("xyz", 3)).toBe("abc");
  });

  it("공백은 그대로 둔다", () => {
    expect(solution("a b", 1)).toBe("b c");
  });

  it("shift가 0이면 그대로 반환한다", () => {
    expect(solution("Hello", 0)).toBe("Hello");
  });

  it("shift가 26을 넘어도 순환한다", () => {
    expect(solution("ab", 27)).toBe("bc");
    expect(solution("XY", 52)).toBe("XY");
  });
});
