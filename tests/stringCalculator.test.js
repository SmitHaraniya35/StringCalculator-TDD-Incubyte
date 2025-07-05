const { add } = require("../src/stringCalculator")

test("Jest is working perfactly!!", () => {
    expect(1).toBe(1);
})

describe("Test String Calculator", () => {
    test('It should return 0 for empty string', () => {
        expect(add("")).toBe(0);
    });
})
