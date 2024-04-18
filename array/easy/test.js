var containsDuplicate = function (nums) {
  let res = Array.from(new Set(nums));
  return res.length !== nums.length;
};
console.log(containsDuplicate([1, 2, 3]));
