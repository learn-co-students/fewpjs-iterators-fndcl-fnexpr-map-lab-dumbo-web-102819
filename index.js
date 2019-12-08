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




function titleCased() { 
  let fin = tutorials.map(function (sentence) {
    let asdf = sentence.split(' ')
    let split = asdf.map(function (word) {
      let modified =  (word.charAt(0).toUpperCase() + word.slice(1))
      return modified
    })
    split = split.join(' ')
    return split
  })
  return fin;
}











// function titleCased() {
//   let fixed = tutorials.map(function (sentence) {
//     let splits = sentence.split(' ').map(function (word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     })
//     splits = splits.join(' ')
//     return splits;
//   })
//   return fixed;
// }



// const titleCased = tutorials.map(function (tutorial) {
//   tutorial = tutorial.split(' ');
//   for (var i = 0; i < tutorial.length; i++) {
//     tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
//   }
//   return tutorial.join(' ');
// });


// let arr1 = []
// let arr2 = []
// const titleCased = tutorials.map(function (tutorial) {
//   arr1 = tutorial.split(' ')
//   for (let i = 0; i < arr1.length; i++) {
//     arr1[i] = arr1[i].charAt(0).toUpperCase() + word.slice(1)
//   }
//   arr2.push(arr1.join(' '))
//   return arr2
// })

// function titleCased() { 
//   let arrayOfWords = [];
//   let arrayOfTitles = [];
//   var letters = /^[A-Za-z]+$/;
//   for (let i = 0; i < tutorials.length; i++) {
//     arrayOfWords = tutorials[i].split(' ');
//     console.log(arrayOfWords); 
//     for (let x = 0; x < arrayOfWords.length; x++) {
//       arrayOfTitles[i] = ''; 
//       if (arrayOfWords[x].match(letters)) {
//         arrayOfTitles[i] = arrayOfTitles[i] + (arrayOfWords[x].charAt(0).toUpperCase() + arrayOfWords[x].slice(1));
//       } else {
//         arrayOfTitles[i] = arrayOfTitles[i] + arrayOfWords[x]}
//       if (x !== arrayOfWords.length) {
//         arrayOfTitles[i] = arrayOfTitles[i] + " " }
//     }; 
//   };
//   return arrayOfTitles;
// };

