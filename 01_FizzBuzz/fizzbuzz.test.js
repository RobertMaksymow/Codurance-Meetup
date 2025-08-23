import {add} from './fizzbuzz.js';
import { fizzBuzz } from './fizzbuzz.js';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('Should take positive integers and outputs their string representation', () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(2)).toBe(2);
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(4)).toBe(4);
  expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(7)).toBe(7);
    expect(fizzBuzz(8)).toBe(8);
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(11)).toBe(11);
    expect(fizzBuzz(12)).toBe("Fizz");
    expect(fizzBuzz(13)).toBe(13);
    expect(fizzBuzz(14)).toBe(14);
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
});