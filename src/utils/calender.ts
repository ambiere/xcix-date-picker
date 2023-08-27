import { padStart } from "./helper";

export default class Calender {
  #CURRENT_YEAR: number;
  #CURRENT_MONTH: number;
  #DATE_OFFSET: number = 1;
  #MONTHS_WITH_30_DAYS: number[] = [4, 6, 9, 11];
  constructor() {
    this.#CURRENT_YEAR = new Date().getFullYear();
    this.#CURRENT_MONTH = new Date().getMonth();
  }

  getCurrentYear() {
    return this.#CURRENT_YEAR;
  }
  getCurrentMonth() {
    return this.#CURRENT_MONTH + this.#DATE_OFFSET;
  }

  getNumberOfDaysInMonth(month = this.getCurrentMonth(), year = this.#CURRENT_YEAR) {
    //TODO End of centuary years must be devided by 400
    const isLeapYear = year % 4 === 0;
    const numberOfDaysInFeb = isLeapYear ? 29 : 28;
    const has30Days = this.#MONTHS_WITH_30_DAYS.includes(month);
    return month === 2 ? numberOfDaysInFeb : has30Days ? 30 : 31;
  }

  getFirstDayOfAMonth(month = this.getCurrentMonth(), year = this.#CURRENT_YEAR) {
    const parsedMonth = padStart(month, 2);
    const date = `${year} - ${parsedMonth} - 01`;
    return new Date(date).getDay() + this.#DATE_OFFSET;
  }
}
