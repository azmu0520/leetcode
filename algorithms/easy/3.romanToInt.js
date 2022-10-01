/**
 * @param {string} s
 * @return {number}
 */

//  Symbol       Value
//  I             1
//  V             5
//  X             10
//  L             50
//  C             100
//  D             500
//  M             1000

// #1 First Solution Runtime: 263 ms || Memory Usage: 48 MB

var romanToInt = function (s) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I': {
        if (s[i + 1] == 'V' || s[i + 1] == 'X') res--;
        else res++;
        break;
      }
      case 'V': {
        res += 5;
        break;
      }
      case 'X': {
        if (s[i + 1] == 'L' || s[i + 1] == 'C') res -= 10;
        else res += 10;
        break;
      }
      case 'L': {
        res += 50;
        break;
      }
      case 'C': {
        if (s[i + 1] == 'D' || s[i + 1] == 'M') res -= 100;
        else res += 100;
        break;
      }
      case 'D': {
        res += 500;
        break;
      }
      case 'M': {
        res += 1000;
        break;
      }
    }
  }
  console.log(res);
};

romanToInt('MDCCCLXXXIV'); // 1000 + 500 + 100

// #2 Second Solution

var romanToInt = function (s) {
  let num = 0;
  let lastDigit = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let item = convert(s[i]);
    if (item >= lastDigit) {
      num += item;
    } else {
      num -= item;
    }

    lastDigit = item;
  }

  return num;
};

var convert = function (a) {
  switch (a) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
  }

  return 0;
};
