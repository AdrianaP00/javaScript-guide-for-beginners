// obtain only first letter from string and drop the last "I'm a super javaScript developer"

let fun = "I'm a super javaScript developer";
let firstLetter = fun.charAt(0);
let words = fun.split(' ');
words.pop(); 
let result = firstLetter + ' ' + words.join(' ');
console.log(result);

module.exports = result;