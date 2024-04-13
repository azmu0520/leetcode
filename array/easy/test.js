var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length, ...nums2.splice(0, n));
  nums1 = nums1.sort((a, b) => a - b);
  return nums1;
};
console.log(merge([1, 2, 3, 0, 0, 0], 0, [2, 5, 6], 3));
