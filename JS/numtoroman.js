function convertToRoman(num) {
  let values = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  let romans = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  let romanstr = '';
  for (let i = 0; i < values.length; i++) {
    while (values[i] <= num) {
      romanstr += romans[i];
      num -= values[i];
    }
  }
  return romanstr;
}
