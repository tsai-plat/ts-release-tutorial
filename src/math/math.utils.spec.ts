import { plus } from "./math.utils";

describe("Test math.utils features:", () => {
  it("1~5 plus should except 15", () => {
    expect(plus(1, 2, 3, 4, 5)).toBe(15);
  });
});
