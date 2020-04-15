import { Date } from './../src/main.js';
import { RuleTester } from 'eslint';

describe('Date', () => {
  test('should correctly display a date with month, day, year', () => {
    let date = new Date(01, 23, 1986);
    expect(date.day).toEqual(01);
    expect(date.month).toEqual(25);
    expect(date.month).toEqual(1986);
  });
});

