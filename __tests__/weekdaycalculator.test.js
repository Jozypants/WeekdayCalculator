import { Date } from './../src/main.js';
import { RuleTester } from 'eslint';

describe('Date', () => {
  test('should correctly display a date with month, day, year', () => {
    let date = new Date(23, 01, 1986);
    expect(date.day).toEqual(23);
    expect(date.month).toEqual(01);
    expect(date.year).toEqual(1986);
  });
});

