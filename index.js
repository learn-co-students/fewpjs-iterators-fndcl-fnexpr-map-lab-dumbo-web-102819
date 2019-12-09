const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((elem) => {
    let phrase = elem.split(' ');
    let uppercased = phrase.map((word) => {
      let lastStr = word.slice(1, word.length);
      let firstLetter;
      if(/[a-z]/.test(word[0])) {
        firstLetter = word[0].toUpperCase();
      } else {
        firstLetter = word[0];
      }
      return firstLetter + lastStr;   
    });
    return uppercased.join(" ");
  });
}
