const { add } = require("../src/stringCalculator")

test("Jest is working perfactly!!", () => {
    expect(1).toBe(1);
})

describe("Test String Calculator", () => {
    test('It should return 0 for empty string', () => {
        expect(add("")).toBe(0);
    });

    test('It should return the number itself for single number', () => {
        expect(add("1")).toBe(1);
    });

    test('It should return sum of multiple comma-separated numbers', () => {
        expect(add("1,2")).toBe(3);
        expect(add("1,2,3")).toBe(6);
        expect(add("1,2,3,4")).toBe(10);
    });

    test('It should support newline as delimiter and return sum of numbers separated by newline', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('It should support custom single-character delimiter', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('It should support custom single-character delimiter', () => {
        expect(add("//****\n1****2")).toBe(3);
    });
})
