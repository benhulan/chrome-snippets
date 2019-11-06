function convertUTC(dateString) {
  let localTime = datify(dateString);
  let localOffset = localTime.getTimezoneOffset();
  console.log('local time is ', loclTime.getHours());
  console.log(localOffset/60*-1 + ' hours from UTC');
}

// input in miliseconds
function returnJSDate(input) {
 var jsDate = new Date(input);
 return jsDate;
}

// month lengths
function getDaysInMonth(month, year) {
  return new Date(year, month+1, 0).getDate();
}

let today = new Date();
let daysInMonth = getDaysInMonth(today.getMonth(), today.getFullYear());
// console.log(daysInMonth);

// global time constants
const SECONDS = 1000;
const MINUTES = SECONDS*60;
const HOURS = MINUTES*60;
const DAYS = HOURS*24;
const WEEKS = DAYS*7;
const MONTHS = DAYS*30;
const YEARS = DAYS*365; // really?

// start, end values in ms
function durationInMinutes(start, end) {
 var duration = end - start;
 return Math.round(duration/MINUTES);
}

function durationInDays(start, end) {
 var duration = end - start;
 return Math.round(duration/DAYS);
}

function durationInMonths(start, end) {
 var duration = end - start;
 return Math.round(duration/MONTH);
}

function calculateTerm(num, str) {
  switch (str) {
    case 'minutes':
      return num * MINUTES;
      break;
    case 'hours':
      return num * HOURS;
      break;
    case 'days':
      return num * DAYS;
      break;
    case 'weeks':
      return num * WEEKS;
      break;
    case 'years':
      return num * YEARS;
      break;
    default:
      return num * MONTHS;
  }
}

function calculateEndDate(startTime, term) {
  return returnJSDate(startTime+term);
}

// let test = calculateEndDate(Date.now(), calculateTerm(6, 'weeks')+calculateTerm(3, 'days'));
// console.log(test);

let startAtRevUnit = new Date('September 16, 2019, 09:00:00 GMT -0500');
// console.log(durationInDays(startAtRevUnit, today));
