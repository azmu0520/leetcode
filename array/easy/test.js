var singleNumber = function (nums) {
  let res = eval(nums.join("^"));
  return res;
};
console.log(singleNumber([1]));
