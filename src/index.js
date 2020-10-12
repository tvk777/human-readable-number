module.exports = function toReadable (number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if(isNaN(number)) return 'this is not a number'
  if(number < 0) return 'negative numbers not support';
  if(number === 0) return 'zero';
  if(number < 20) return ones[number];
  if(number < 100) {
    let string = number.toString();
    return string[1]!=='0' 
    ? `${tens[string[0]]} ${ones[string[1]]}`
    : `${tens[string[0]]}`;
  }
  let stringNumber = number.toString();
  if(stringNumber > 2) {
    const hn = stringNumber[0];
    const tn = (stringNumber[1]+stringNumber[2])
    return tn!=='00'
    ? `${ones[stringNumber[0]]} hundred ${toReadable(+tn)}`
    : `${ones[stringNumber[0]]} hundred`;
  } 
};
