function palindrome(str) {
  //assign a front and a back pointer
  let start = 0;
  let end = str.length - 1;
  while (end > start) {
    if (str[start].match(/[\W_]/)) {
      start++;
      continue;
    }
    if (str[end].match(/[\W_]/)) {
      end--;
      continue;
    }
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
