const { add, getCalledCount, resetCalledCount } = require("../src/stringCalculator")

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

    test('It should support custom single-character delimiter with any length', () => {
        expect(add("//****\n1****2")).toBe(3);
        expect(add("//[%%]\n1%%2%%3")).toBe(6);
    });

    test('It should support multiple single-character custom delimiters', () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

    test('It should support multiple custom delimiters with any length', () => {
        expect(add("//[***][%%]\n1***2%%3")).toBe(6);
    });

    test('It should throw error for single or more negative numbers', () => {
        expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
        expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
    });

    test('It should ignore numbers greater than 1000', () => {
        expect(add("2,1001")).toBe(2);
    });

    test('track how many times add was called', () => {
        resetCalledCount();
        add("1,2");
        add("2,3");
        expect(getCalledCount()).toBe(2);
    });

})
