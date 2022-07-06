// module.exports = function check(str, bracketsConfig) {
//   let comparedArray = [];

//   let bracketsMap = {
//     ")": "(",
//     "}": "{",
//     "]": "[",
//     "2": "1",
//     "4": "3",
//     "6": "5"
//   };
  
//   let similarDigitsMap = {
//     "|": "|",
//     "7": "7",
//     "8": "8",
//     "9": "9",
//     "0": "0",
//   }
  
//   let a;
//   if(str.length % 2 !== 0) {
//     return false;
//   }
  
//   for (i = 0; i < str.length; i++) {
//     let currentChar = str[i];
  
//     if (openBracket(currentChar) || (similarDigit(currentChar) && currentChar !== comparedArray[comparedArray.length - 1])) {
//       comparedArray.push(currentChar);
//     } else if (bracketsMap[currentChar] === comparedArray[comparedArray.length - 1] || similarDigitsMap[currentChar] === comparedArray[comparedArray.length - 1]) {
//       a = true;
//       comparedArray.pop()
//     } else {
//       a = false;
//       break;
//     }
  
//   }
  
//   return a && comparedArray.length === 0;
  
// }

//   function openBracket (a) {
//     let result = ["(", "{", "[", "2", "4", "6"].indexOf(a) > -1;
//     return result;
//   }
  
//   function similarDigit (a) {
//     let result = ["|", "7", "8", "9", "0",].indexOf(a) > -1;
//     return result;
//   }

function isOpen(bracketsMap,currentChar){
  return (Object.values(bracketsMap).indexOf(currentChar) > -1? true : false);  
}

function isOpenEqClose(bracketsMap,currentChar){
  return Object.keys(bracketsMap).find(key => bracketsMap[key] === currentChar) === currentChar; 
}

module.exports = function check(str, bracketsConfig) {

  if(str.length%2 === 1){return false;}
  const bracketsMap = Object.fromEntries(bracketsConfig.map(([v, k]) => [k, v]));
  
  let stack = [];  
  let a;
  
  for (i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if ((isOpen(bracketsMap,currentChar) && !isOpenEqClose(bracketsMap, currentChar)) || (isOpenEqClose(bracketsMap, currentChar) && currentChar !== stack[stack.length - 1])) 
    {
      stack.push(currentChar);
    } else if (bracketsMap[currentChar] === stack[stack.length - 1] || bracketsMap[currentChar] === stack[stack.length - 1]) {
      a = true;
      stack.pop()
    } else {
      a = false;
      break;
    }
  }
  
  return a && stack.length === 0;
  

}