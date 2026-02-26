/****************************************************************************************************************/

// Reverse Array

const reverseArray = (arr) => {
  let newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
};

// When you're ready to test your code, uncomment the below and run:
const sentence = ["sense.", "make", "all", "will", "This"];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

/****************************************************************************************************************/

// Greet Aliens

const greetAliens = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`
    );
  }
};

// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

/****************************************************************************************************************/

// Convert to Baby

const convertToBaby = (arr) => {
  result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(`baby ${arr[i]}`);
  }
  return result;
};

// When you're ready to test your code, uncomment the below and run:

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));

/****************************************************************************************************************/

// Decline everyhting / Accept everything
const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

const politelyDecline = (veg) => {
  console.log("No " + veg + " please. I will have pizza with extra cheese.");
};

// Write your code here:
const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
};

const acceptEverything = (arr) => {
  arr.forEach((item) => {
    console.log(`Ok, I guess I will eat some ${item}.
`);
  });
};

/****************************************************************************************************************/

// Square Nums
const numbers = [2, 7, 9, 171, 52, 33, 14];

const toSquare = (num) => num * num;

// Write your code here:
const squareNums = (arr) => arr.map(toSquare);

/****************************************************************************************************************/

// Shout Greetings!
const shoutGreetings = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(`${arr[i].toUpperCase()} !`);
  }
  return result;
};

// Feel free to uncomment out the code below to test your function!

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]

/****************************************************************************************************************/

// Sort Years
const sortYears = (arr) => {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr;
};

// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

/****************************************************************************************************************/

// Write your code here:
const justCoolStuff = (arr1, arr2) => {
  return arr1.filter((word) => arr2.includes(word));
};

// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

/****************************************************************************************************************/

// Is The Dinner Vegan
const isTheDinnerVegan = (arr) => {
  if (arr.every(item => item.source === "plant")) {
    return true;
  } else {
    return false
  }
}
// Feel free to comment out the code below to test your function
const dinner = [
  { name: "hamburger", source: "meat" },
  { name: "cheese", source: "dairy" },
  { name: "ketchup", source: "plant" },
  { name: "bun", source: "plant" },
  { name: "dessert twinkies", source: "unknown" },
];

console.log(isTheDinnerVegan(dinner));
// Should print false

/****************************************************************************************************************/

// Sort Species By Teeth
const speciesArray = [
  { speciesName: "shark", numTeeth: 50 },
  { speciesName: "dog", numTeeth: 42 },
  { speciesName: "alligator", numTeeth: 80 },
  { speciesName: "human", numTeeth: 32 },
];

// Write your code here:

const sortSpeciesByTeeth = (arr) => {
  return arr.sort((a, b) => a.numTeeth - b.numTeeth);
};

// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray));

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

/****************************************************************************************************************/

// Find My Keys
const findMyKeys = arr => {
  const foundKeys = arr.findIndex((key) => 
    key === 'keys'
  );
  return foundKeys
}
// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4

/****************************************************************************************************************/

// Dog Factory
const dogFactory = (name, breed, weight) => {
  return {
    _name: name,
    _breed: breed,
    _weight: weight,
    get name() {
      return this._name;
    },
    set name(newName) {
      this._name = newName;
    },
    get breed() {
      return this._breed;
    },
    set breed(newBreed) {
      this._breed = newBreed;
    },
    get weight() {
      return this._weight;
    },
    set weight(newWeight) {
      this._weight = newWeight;
    },
    bark() {
      return 'ruff! ruff!'
    },
    eatTooManyTreats() {
      this._weight++
    }
  };
};

dogFactory("Joe", "Pug", 27);
// Should return { name: 'Joe', breed: 'Pug', weight: 27 }

/****************************************************************************************************************/

/*
Write a function subLength() that takes two parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the two characters. If there are less than two or more than two occurrences of the character the function should return 0.
*/

const subLength = (str, char) => {
  let arrayChar = str.split('');
  //console.log(arrayChar);
  let pointA = str.indexOf(char);
  //console.log(pointA);
  let pointB = str.lastIndexOf(char);
  //console.log(pointB);
  let matchElement = arrayChar.filter((element) => {
    return element === char;
  })
  //console.log(matchElement)
  if (matchElement.length > 2 || matchElement.length < 2) {
    return 0
  } else {
    let result = 1 + (pointB - pointA);
    return result;
    }
}

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

/****************************************************************************************************************/

/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where appropriate.
*/
const groceries = arr => {
  let length = arr.length;
  if (length === 1)
    return arr[0].item;
  if (length === 2)
    return `${arr[0].item} and ${arr[1].item}`;
  let str = ''
  arr.forEach((obj, index) => {
    if (index + 1 == length)
      str += `and ${obj.item}`;
    else if (index + 2 == length)
            str += `${obj.item} `;
        else
            str += `${obj.item}, `
  })
  return str
}
groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'

groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'

groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'