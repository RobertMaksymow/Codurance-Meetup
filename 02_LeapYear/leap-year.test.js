import {leapYear}  from "./leap-year";

describe('Leap Year', () => {
    test('Leap year function exists', () => {
        expect(leapYear).toBeDefined();
    });
    
    test.todo("A year is not a leap year if not divisible by 4"
    );

    test.todo("A year is a leap year if divisible by 4"
    );

    test.todo("A year is a leap year if divisible by 400");

    test.todo("A year is not a leap year if divisible by 100 but not by 400")
});
