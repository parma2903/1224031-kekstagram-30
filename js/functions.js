// function isStringLengthFits(checkingString, numberOfSymbols) {
//   return checkingString.length <= numberOfSymbols;
// }
// isStringLengthFits('Проверяемая строка', 20);
// isStringLengthFits('Проверяемая строка', 18);
// isStringLengthFits('Проверяемая строка', 10);

// function isChekingStringPalindrom(checkingString) {
//   let correctString = checkingString.toString().replace(/\s/g, '').toLowerCase();
//   let emptyString = '';
//   for (i=correctString.length-1; i >= 0; i--) {
//     emptyString += correctString[i];
//   }
//   return emptyString === correctString;
// }
// isChekingStringPalindrom('дОвод');
// isChekingStringPalindrom('Кекс');
// isChekingStringPalindrom('Лёша на полке клопа нашёл ');

// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

// getRandomInteger(3,8)
