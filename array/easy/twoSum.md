# 1. Two Sum

- **Difficulty**: Easy
- **Related Topics**: Array, Hash Table

## Problem

\*Bizga sonlardan tashkil topgan `array`(nums) va aniq bir son berilgan (target). `Array` ichidagi 2 elementning qo'shilishi evaziga `target`ga teng bo'ladigan elementlarning index raqamini toping.

Har bir `array`dan bir dona javob chiqadi deb o'ylashingiz mumkin.

Bir xil elementni ikki marta ishlata olmaysiz.

Javobni istalgan tartibda qaytarishingiz mumkin.

### Example

Given `nums = [2, 7, 11, 15]`, `target = 9`,

Because `nums[0] + nums[1] = 2 + 7 = 9`,
return `[0, 1]`.

## Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var hash = {};
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    if (nums[i] in hash) return [hash[nums[i]], i];
    hash[target - nums[i]] = i;
  }
  return [-1, -1];
};
```
