/**
 * 按照题目的要求 想使用二分查找来解决
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = parseInt((left + right) / 2);
    while (left < right) {

        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] === target) {
            return mid;
        }
        mid = parseInt((left + right) << 2);
    }
    return nums[mid] < target ? mid += 1: mid;
};

let arr = [1, 3];
console.log(searchInsert(arr, 2));