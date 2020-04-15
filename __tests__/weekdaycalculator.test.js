import { Date } from './../src/main.js';
import { RuleTester } from 'eslint';

describe('Date', () => {
  test('should correctly display a date with month, day, year', () => {
    let date = new Date(23, 1, 1986);
    expect(date.day).toEqual(23);
    expect(date.month).toEqual(1);
    expect(date.year).toEqual(1986);
  });
});

const birthday = new Date('August 19, 1975 23:15:30');
const date1 = birthday

var string = "hello";
string.endsWith(arg);