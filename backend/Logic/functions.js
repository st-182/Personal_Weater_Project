import { month, week } from "../Logic/dataArrays.js";

//!Logic additional functionality, necessary for work
// Functions
// was taken from here https://www.geeksforgeeks.org/find-day-of-the-week-for-a-given-date/
// Understanding the Maths:

// 14/09/1998
// dd=14
// mm=09
// yyyy=1998 //non-leap year

// Step 1: Informations to be remembered.
//  Magic Number Month array.
//  For Year: {0,3,3,6,1,4,6,2,5,0,3,5}
//  DAY array starting from 0-6: {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}
//  Century Year Value: 1600-1699 = 6
//       1700-1799 = 4
//       1800-1899 = 2
//       1900-1999 = 0
//       2000-2099 = 6..

// Step 2: Calculations as per the steps

//  Last 2 digits of the year:  98
//  Divide the above by 4:     24
//  Take the date(dd):      14
//  Take month value from array: 5 (for September month number 9)
//  Take century year value:  0  ( 1998 is in the range 1900-1999 thus 0)
//           -----
//  Sum:        141

//  Divide the Sum by 7 and get the remainder: 141 % 7 = 1

//  Check the Day array starting from index 0: Day[1] = Monday

// **If leap year it will be the remainder-1
const dayOfTheWeek = (d, m, y) => {
  let t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  y -= m < 3 ? 1 : 0;
  return (y + y / 4 - y / 100 + y / 400 + t[m - 1] + d) % 7;
};

// takes number from dayOfTheWeek function and returns String value of the corresponding week day
const dayOfTheWeekInString = (number) => {
  let day;
  if (number > 0) {
    day = week[number];
  } else {
    day = week[-number];
  }
  return day;
};

const lithuanianToEnglish = (word) => {
  let letters = word.toLowerCase().split("");
  let correctLetters = letters.map((letter) => {
    if (letter === "Ą" || letter === "ą") {
      return "a";
    } else if (letter === "Č" || letter === "č") {
      return "c";
    } else if (letter === "Ę" || letter === "ę") {
      return "e";
    } else if (letter === "Ė" || letter === "ė") {
      return "e";
    } else if (letter === "Į" || letter === "į") {
      return "i";
    } else if (letter === "Š" || letter === "š") {
      return "s";
    } else if (letter === "Ų" || letter === "ų") {
      return "u";
    } else if (letter === "Ū" || letter === "ū") {
      return "u";
    } else if (letter === "Ž" || letter === "ž") {
      return "z";
    } else {
      return letter;
    }
  });
  return correctLetters.join("");
};

export { dayOfTheWeek, dayOfTheWeekInString, lithuanianToEnglish };
