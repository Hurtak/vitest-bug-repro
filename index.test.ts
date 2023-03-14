import { describe, test, expect } from "vitest";
import { add } from "./index";

describe("add", () => {
  test("add 1 + 1 to equal 2", () => {
    expect(add(1, 1)).toBe(2);
  });
});
