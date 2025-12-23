import {stringCalculator} from './03_string-calculator';

test('returns 0 for empty string', () => {
    expect(stringCalculator("")).toBe(0);
});

test('If only one number is provided, it returns that number', () => {
    expect(stringCalculator("5")).toBe(5);
    expect(stringCalculator("42")).toBe(42);
});

test('If two numbers are provided, it returns their sum', () => {
    expect(stringCalculator("1,2")).toBe(3);
    expect(stringCalculator("10,20")).toBe(30);
});

test('If multiple numbers are provided, it returns their sum', () => {
    expect(stringCalculator("1")).toBe(1);
    expect(stringCalculator("5,1")).toBe(6);
    expect(stringCalculator("10,20,30,40")).toBe(100);
    expect(stringCalculator("1,2,3,4,5,6,7,8,9")).toBe(45);
});