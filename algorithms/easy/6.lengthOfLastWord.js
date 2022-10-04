/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let trim = s.trim().split(' ');
  return trim[trim.length - 1].length;
};

lengthOfLastWord('   fly me   to   the moon  ');
