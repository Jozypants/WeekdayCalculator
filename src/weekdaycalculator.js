// Business Logic 

export class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

export class WeekDayCalc {
  constructor() {
    this.dateNow = new Date();
  }

  getWeekday() {
    // return this.dateNow.getWeekday();
    write a custom method
  }
}

// main.js

var dateInput = jQuery.val();
var dateNow = new Date(dateInput);
var weekday = dateNow.getWeekday();

const myCalc = WeekDayCalc();
myCalc.getWeekday();