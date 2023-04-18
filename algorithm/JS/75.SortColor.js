/**
 * 这里没有思路的话直接使用暴力的方法来进行操作
 * 这里的暴力方法就是分别统计不同元素的个数然后放入新数组
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var count = [0, 0, 0];
    for (var i = 0; i < nums.length; i++){
        count[nums[i]] += 1;
    }
    var index = 0;
    for (var i = 0; i < count[0]; i++) {
        nums[index++] = 0;
    }
    for (var i = 0; i < count[1]; i++) {
        nums[index++] = 1;
    }
    for (var i = 0; i < count[2]; i++) {
        nums[index++] = 2;
    }
};

var nums = [0, 1, 0, 2, 0, 1];
// sortColors(nums);
// console.log(nums);

/**
 * 三路快排 分为三块来进行的
 * @param nums
 */
var sortColors2 = function(nums) {
    let zero = -1; // 0值下标 nums[0....zero] === 0
    let two = nums.length; // 2值的下标 最终 nums[two...n-1] === 2
    for (let i = 0; i < two;) {
        if (nums[i] === 1) {
            i++;
        }
        else if (nums[i] === 2) {
            two -= 1;
            [nums[i], nums[two]] = [nums[two], nums[i]];
        }
        else {
            zero++;
            [nums[zero], nums[i]] = [nums[i], nums[zero]];
            i++;
        }
    }
}

sortColors2(nums);
console.log(nums);