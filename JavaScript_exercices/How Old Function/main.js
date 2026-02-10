/*
Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:
'You will be [calculated age] in the year [year passed in]'

If the year is before they were born, you should return a string in the following format:
'The year [year passed in] was [calculated number of years] years before you were born'

If the year is in the past but not before the person was born, you should return a string in the following format:
'You were [calculated age] in the year [year passed in]'
 */

// Write your function here:
const howOld = (age, year) => {
  const theCurrentYear = new Date().getFullYear();
  const yearDifference = year - theCurrentYear;
  const newAge = age + yearDifference;
  const ageAtYear = age - (theCurrentYear - year);
  if (year > theCurrentYear) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (year < theCurrentYear - age) {
    return `The year ${year} was ${Math.abs(
      ageAtYear
    )} years before you were born.`;
  } else {
    return `You were ${ageAtYear} in the year ${year}`;
  }
};

// Once your function is written, write function calls to test your code!
console.log(howOld(34, 2028));
console.log(howOld(34, 2002));
console.log(howOld(34, 1995));
console.log(howOld(34, 2056));
console.log(howOld(34, 1890));
