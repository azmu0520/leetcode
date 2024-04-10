var twoSum = function (nums, target) {
  let res = [];
  label: for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] == target) {
          res = [i, j];
          break label;
        }
      }
    }
  }
  return res;
};

console.log(twoSum([3, 3, 1, 1, 5], 6));
