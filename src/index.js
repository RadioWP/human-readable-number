module.exports = function toReadable(number) {

  const simpleTwenty = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  const simpleTens = [
    'zero',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const simpleHundred = 'hundred';

  let digit = number.toString().split('');
  let digits = number.toString().slice(-2);

  let result;

  if (number.toString().length >= 4) {
    result = 'the number is out of the range. only 0-999 numbers are allowed.';

  } else if (number.toString().length === 3) {
    if (number % 100 === 0) {
      result = `${simpleTwenty[digit[0]]} ${simpleHundred}`;
    } else if (number % 10 === 0) {
      result = `${simpleTwenty[digit[0]]} ${simpleHundred} ${simpleTens[digit[1]]}`;
    } else if (digits < 10) {
      result = `${simpleTwenty[digit[0]]} ${simpleHundred} ${simpleTwenty[digit[2]]}`;
    } else if (digits >= 10 && digits <= 19) {
      result = `${simpleTwenty[digit[0]]} ${simpleHundred} ${simpleTwenty[digits]}`;
    } else {
      result = `${simpleTwenty[digit[0]]} ${simpleHundred} ${simpleTens[digit[1]]} ${simpleTwenty[digit[2]]}`;
    }

  } else if (number.toString().length < 3) {
    if (number % 10 === 0) {
      result = `${simpleTens[digit[0]]}`;
    } else if (number <= 19) {
      result = `${simpleTwenty[number]}`;
    } else {
      result = `${simpleTens[digit[0]]} ${simpleTwenty[digit[1]]}`;
    }
  }

  return result;

}
