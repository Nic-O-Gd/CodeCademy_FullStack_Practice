/* 
In this project, we will build a Magic Eight Ball using control flow in JavaScript.
The user will be able to input a question, and then our program will output a random fortune. 
*/

// Step 1: Define userName variable
let userName = "D";

// Step 2: Ternary expression to log greeting
console.log(userName ? `Hello, ${userName}!` : "Hello!");

// Step 3: Define userQuestion variable
let userQuestion = "Will i get ?";

// Step 4: log userQuestion, it can include userName
console.log(`${userName}: ` + userQuestion);
console.log(`8ball: So you asked, ${userQuestion}`);
console.log("8ball: mhhh... let me check... (processing...in progress...)");
console.log("8ball:.......in progress...");
console.log("8ball:..............in progress...");
console.log("8ball:.....................in progress...");
console.log("8ball:............................in progress...");

// Step 5: generate a random number between 0 and 7
randomNumber = Math.floor(Math.random() * 8);

// Step 6: Define eightBall variable
let eightBall = "";

// Step 7: with randomNumber, assign eightBall reply
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  default:
    eightBall = "Signs point to yes";
}

// Step 8: log Eight Ball's answer
console.log(`8ball: ${eightBall}`);
