import { describe, it, expect } from "vitest";
import { solution } from "./solution";

describe("4.6 다중 기준 정렬", () => {
  it("나이 오름차순, 동률은 이름 사전순으로 정렬한다", () => {
    expect(
      solution([
        { name: "Bob", age: 30 },
        { name: "Amy", age: 30 },
        { name: "Cara", age: 20 },
      ]),
    ).toEqual([
      { name: "Cara", age: 20 },
      { name: "Amy", age: 30 },
      { name: "Bob", age: 30 },
    ]);
  });

  it("원본을 변경하지 않는다", () => {
    const input = [{ name: "B", age: 2 }, { name: "A", age: 1 }];
    solution(input);
    expect(input[0].name).toBe("B");
  });
});
