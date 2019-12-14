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

// const titleCased = () => {
//   return tutorials
// }

  const titleCased = (input) => {
    return tutorials.map( line => {
      let tokens = line.split(' ')
      let capitalizedTokens =
        tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
      let response = capitalizedTokens.join(' ')
      return response
    })
  }


 // = tutorials.map ((tut) => {
 //  console.log("Tut", tut);
 //    return tut.toLowerCase().split(' ').map((s) => {s.charAt(0).toUpperCase() + s.substring(1)}).join(' ')})

    // .split(' ')
    // .map((s) => {s.charAt(0).toUpperCase() + s.substring(1)})
    // .join(' ');\
// () => {
//   return tutorials.map ((tut) => {
//     console.log("Tut ", tut);
//     tut.toLowerCase()
//     .split(' ')
//     .map((s) => {s.charAt(0).toUpperCase() + s.substring(1)})
//     .join(' ');
//       console.log("Tut 2 ", tut);
//   })
// }
