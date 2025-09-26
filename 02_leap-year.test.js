import {leapYear}  from "./02_leap-year";

describe('Leap Year', () => {
    test('Leap year function exists', () => {
        expect(leapYear).toBeDefined();
    });
    
    test("A year is not a leap year if not divisible by 4", () => {
        expect(leapYear(1997)).toBe(false);
        expect(leapYear(2025)).toBe(false);
        expect(leapYear(2000)).toBe(true);
    });

    test("A year is a leap year if divisible by 4", () => {
        expect(leapYear(1996)).toBe(true);
    });

    test("A year is a leap year if divisible by 400", () => {
        expect(leapYear(1800)).toBe(false);
        expect(leapYear(2000)).toBe(true);
    });

    test("A year is not a leap year if divisible by 100 but not by 400", () => {
        expect(leapYear(1900)).toBe(false);
    })
});
