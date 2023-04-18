/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    /**
    第一种思路：将非0元素移动到新的数组中然后新数组覆盖
     但是这个对C语言很不友好，因为新建数组是需要重新申请空间，并且不能遍历参数数组时同步增加到新数组去
     w*/
    let newNums = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            newNums.push(nums[i]);
        }
    }

    for (var i = 0; i < newNums.length; i++) {
        nums[i] = newNums[i];
    }

    for (var i = newNums.length; i < nums.length; i++) {
        nums[i] = 0;
    }
};

var moveZeroes2 = function(nums) {
    /**
     * 原地算法 使用双指针 个人看来算是快慢指针的方法
     * 这里有个缺点就是 这里是需要将移动完非零元素之后的元素全部遍历为0会消耗一定的内存
     * */
    let k = 0; // 慢指针
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[k], nums[i]] = [nums[i], nums[k]];
            k++;
        }
    }
    for (var i = k; i < nums.length; i++) {
        nums[i] = 0;
    }
}


/**
 *这里是在方法2的基础上进行了一个改进， 直接在遇到非0的元素的时候直接交换位置，这样可以避免最后的遍历赋0
 * 但是由于ES6中的交换会花费更多的时间，所以时间复杂度是方法二最好
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes3 = function(nums) {
    let k = 0; // 慢指针
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[k], nums[i]] = [nums[i], nums[k]];
            k++;
        }
    }
};

var nums = [1,2,0,3,0,4];
moveZeroes3(nums);
console.log(nums);

