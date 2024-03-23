import type { Input, Output } from "./index";
import findLongestCommonPrefix from ".";

describe("Test cases", () => {
  test("There is has common prefix among the input strings", () => {
    const input = ["flower", "flow", "flight"] as Input;
    const output = "fl" as Output;
    const func = jest.fn(findLongestCommonPrefix);
    expect(func(input)).toBe(output);
  });
  test("There is no common prefix among the input strings", () => {
    const input = ["dog", "racecar", "car"] as Input;
    const output = "" as Output;
    const func = jest.fn(findLongestCommonPrefix);
    expect(func(input)).toBe(output);
  });
  test("There is no common prefix among the input strings", () => {
    const input = ["map", "math", "test"] as Input;
    const expectedOutput = "" as Output;
    const func = jest.fn(findLongestCommonPrefix);
    expect(func(input)).toBe(expectedOutput);
  })
});
