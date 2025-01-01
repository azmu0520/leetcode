var isPalindrome = function (x) {
  if (x < 0) return false;
  let str = `${x}`;
  if (str[str.length - 1] !== str[0]) return false;
  let slow = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== str[slow]) {
      return false;
    }
    slow++;
  }
  return true;
};

console.log(isPalindrome(1111));
