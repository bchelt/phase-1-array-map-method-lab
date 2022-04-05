const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
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
  function fixCase(element) {
    const stringArray = element.split(" ");
    let fixedString = "";
    let word;
    for (let i = 0; i < stringArray.length; i++) {
      let word = stringArray[i];
      fixedString = fixedString + word.slice(0, 1).toUpperCase() + word.slice(1, word.length);
      if (!(i === stringArray.length - 1))
        fixedString = fixedString + " ";
    }
    return fixedString
  }
  //tutorials.map(fixCase);
  
  return tutorials.map(fixCase);
}
