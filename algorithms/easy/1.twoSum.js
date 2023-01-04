/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = [];
  label: for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] == target) {
          res.push(i, j);
          break label;
        }
      }
    }
  }
  return res;
};

// Runtime 225 ms ||  Beats 15.38%
// Memory 42.2 MB ||  Beats 77.35%

twoSum([2, 7, 11, 15], 9);
