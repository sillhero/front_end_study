/**二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 定义头尾指针使用循环来计算
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = parseInt((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }else if (nums[mid] < target) {
            left = mid + 1;
        }else if (nums[mid] > target) {
            right = mid - 1;
        }
    }
    return -1;
};

let arr = [-1,0,3,5,9,12];
console.log(search(arr, 9));