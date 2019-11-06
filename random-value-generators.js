// PART I:  RANDOM NUMBERS FOR GAMING

// sides is type of die
function dieRoller(sides) {
  return Math.ceil(Math.random()*sides);
}

// sides is type of dice, qty is quantity of dice
function multiDieRoller(sides, qty) {
  let total = 0;
  for(qty>1; qty--;){
    total+=dieRoller(sides);
  }
  return total;
}

// TODO: what if you want the value of (3)*6-sides + (2)*8-sides, etc.?
// this would need to be interactive, so for now just call multiDieRoller()
// multiple times and add the results


// PART II:  RANDOM NUMBERS FOR UNIQUE IDs

// simple id based on current time in miliseconds plus random 4-digit base 10 number
function idMaker() {
  return Date.now().toString() + '-' + ('0000' + Math.floor(Math.random()*1000).toString()).substr(-4);
}

// AWS ids look like this:
// "eb100210-50f3-11e8-bd25-b79dc8319b70"

function hexMaker(baseTenNumber) {
  let hexString = baseTenNumber.toString(16);
  if (hexString.length % 2 !== 0) {
    hexString = '0' + hexString;
  }
  return hexString;
}
// hexMaker(15); // expect "0f"
// hexMaker(16); // expect "10"

function randomTwoDigitHex() {
  return hexMaker(Math.floor(Math.random()*256));
}

// digits is desired number of digits in hex number. odd numbers will be prepended with 0
function randomMultiDigitHex(digits) {
  return hexMaker(Math.floor(Math.random()*Math.pow(256, digits/2)));
}

function awsIdMaker() {
  let newRandomId = randomMultiDigitHex(8)+'-'+
    randomMultiDigitHex(4)+'-'+
    randomMultiDigitHex(4)+'-'+
    randomMultiDigitHex(4)+'-'+
    randomMultiDigitHex(12);
  return newRandomId;
}


// PART III: RANDOM NUMBERS FOR COLORS:

function randomHexColor() {
//   let sixDigits = hexMaker(Math.floor(Math.random()*16777216));
  return '#' + randomMultiDigitHex(6);
}

// TODO:
// function to calculate complementary colors mathmatically?


// TODO:
// pick a card
