/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// #1 First Solution

// var twoSum = function (nums, target) {
//   let res = [];
//   parent: for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i != j) {
//         if (nums[i] + nums[j] === target) {
//           res = [i, j];
//           console.log(`${i}i + ${j}j`);
//           break parent;
//         }
//       }
//     }
//   }
//   return res;
// };

// line- 11          javoblarni array ko'rinishida qaytarish maqsadida bo'sh array ochib oldik.
// line- 12~22       ikkita loop yaratib oldik. Birinchisi sonlarni oddiy tartibda aylanib chiqadi
// line- 13          Ikkinchi loop har safar birinchi loop yurganida unga mos ravishda qolgan sonlarni
// line- 14~20       unga solishtirib chiqadi.

var twoSum = function (nums, target) {
  var map = {};
  for (let i = 0; i < nums.length; i++) {
    var value = nums[i];
    var complementPair = target - value;
    if (map[complementPair] !== undefined) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }
};

twoSum([2, 7, 11, 15], 9);
