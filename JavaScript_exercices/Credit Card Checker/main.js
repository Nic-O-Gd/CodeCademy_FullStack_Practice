/*
Challenge Project: Credit Card Checker
The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!

As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions. 
*/

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// 1. Create validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid.
const validateCred = (arr) => {
  // Make a copy of the array to avoid mutating the original
  const arrCopy = arr.slice();

  // Drop the last digit (check digit)
  const checkDigit = arrCopy.pop();

  // Reverse the array
  const reversed = arrCopy.slice().reverse();

  // Double every second digit
  for (let i = 0; i < reversed.length; i++) {
    if (i % 2 === 0) {
      // Double the digit
      reversed[i] *= 2;
      // Subtract 9 if the result is greater than 9
      if (reversed[i] > 9) {
        reversed[i] -= 9;
      }
    }
  }

  // Sum all digits including the check digit
  const totalSum = reversed.reduce((acc, val) => acc + val, 0) + checkDigit;

  // Valid if total sum modulo 10 is 0
  return totalSum % 10 === 0;
};
//validateCred(valid2); // return true
//console.log(valid2); // return [ 5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9 ]

// 2. Create findInvalidCards() that has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
const findInvalidCards = (arr) => {
  // Make a copy of the array
  const copyArr = arr.slice();
  // Check if array is valid using validateCred function
  if (!validateCred(copyArr)) {
    // If invalid, return the array
    return copyArr;
    // If valid, return a message
  } else {
    return "This is a valid Card Number";
  }
};
const invalidCards = findInvalidCards(batch);
console.log(invalidCards); // return array of invalid cards;

// 3. Create idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.
const idInvalidCardCompanies = (arr) => {
  const companies = arr.map((card) => {
    const firstDigit = card[0];

    switch (firstDigit) {
      case 3:
        return "Amex";
      case 4:
        return "Visa";
      case 5:
        return "Mastercard";
      case 6:
        return "Discover";
      default:
        return "Company not found";
    }
  });

  // return unique values
  return [...new Set(companies)];
};
