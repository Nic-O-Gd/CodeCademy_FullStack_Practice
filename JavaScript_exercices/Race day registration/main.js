/* 

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). 
They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

    Early adults receive a race number at or above 1000.
    All others receive a number below 1000.

Start time:

    Adult registrants run at 9:30 am or 11:00 am.
    Early adults run at 9:30 am.
    Late adults run at 11:00 am.
    Youth registrants run at 12:30 pm (regardless of registration).
*/


// Step 1: set a range from 0 to 1000
let raceNumber = Math.floor(Math.random() * 1000);

// Step 2: Define registeredEarly true
let registeredEarly = true;

//Step 3: Define runnerAge
let runnerAge = 34;

//Step 4: checks whether the runner is an adult AND registered early //
if (runnerAge >= 18 && registeredEarly) {
  raceNumber += 1000;
}

//Step 5: check runners over 18 who registered early //
if (runnerAge >= 18 && registeredEarly) {
  console.log(`Race start at 9:30 am and your race number is ${raceNumber}`);

//Step 6: check runners over 18 who registered late //
} else if (runnerAge >= 18 && !registeredEarly) {
  console.log(`Race start at 11:00 am and your race number is ${raceNumber}`);
}

//Step 7: runners under 18  //
if (runnerAge < 18) {
  console.log(`Race start at 12:30pm and your race number is ${raceNumber}`);
} else if (runnerAge === 18) {
  console.log("go to registration desk");
}
