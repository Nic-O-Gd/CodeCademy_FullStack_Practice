const getVowelCount = (sentence) => {
  const vowels = "aeiuoAEIUO";
  let count = 0;
  for (let char of sentence) {
    if (vowels.includes(char)) {
        count ++;
        }
  } return count;
}


function getConsonantCount(sentence) {
  const vowels = "aeiou";
  const regex = /[a-zA-Z]/;
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (!vowels.includes(char) && regex.test(char)) {
      count++;
    }
  }
  return count;
}
getConsonantCount( "Coding is fun");

const getPunctuationCount = (sentence) => {
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (/[^A-Za-z0-9\s]/.test(char)) {	// /[^A-Za-z0-9\s]/ matches any character that is not a letter, digit, or whitespace
      count++;
    }
  }
  return count;
}

const countWords = (sentence) => {
  const words = sentence.trim().split(' ');
  let count = 0;
  for (const word of words) {
    if (word !== '') {
      count++;
    }
  }
  return count;
}
  

  
