/**
 * @param {number} x
 * @return {boolean}
 */

// #1 First solution

//  line-11      Berilgan number data type ni avval strin-ga , arrayga va arrayni reverse qilib yana string-ga o'xgartiramiz.

var isPalindrome = function (x) {
  let reverse = x.toString().split('').reverse().join('');
  return x == reverse;
};

isPalindrome(122);

// #2 First solution

var isPalindrome = function (x) {
  //Short circuit
  if (x < 0 || (x !== 0 && x % 10 == 0)) return false;

  let reverse = 0;

  while (x > reverse) {
    reverse = reverse * 10 + (x % 10);
    x = ~~(x / 10);
  }

  return x === reverse || x === ~~(reverse / 10);
};
