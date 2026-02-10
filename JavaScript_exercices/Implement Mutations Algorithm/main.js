const mutation = (arr) => {
  let stringOne = arr[0].toLowerCase();
  let stringTwo = arr[1].toLowerCase();

  for (let char of stringTwo) {
    if (!stringOne.includes(char)) {
      return false; // If any character isn't found, return false immediately
    }
  }
  return true; // All characters were found
};
