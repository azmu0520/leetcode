var containsNearbyDuplicate = function (nums, k) {
  let dup = Array.from(new Set(nums)).length !== nums.length;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
