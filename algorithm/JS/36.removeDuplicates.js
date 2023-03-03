/**
 * 这里是原地去除重复值
 * @param nums
 * @return number 
 */
var removeDuplicates = function(nums) {
    let fast = 1;
    let slow = 1;
    while (fast < nums.length) {
        // 这个比较条件是不行的 如果重复字段很长的话 快指针后面的数与长段重复字段会一直交换
        // if (nums[fast] != nums[slow]) {
        //     nums[slow] = nums[fast];
        //     slow++;

        // }
        if (nums[fast] != nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
}

let arr = [0,0,1,1,1,2,2,3,3,4];
let result = removeDuplicates(arr);
console.log(result);
console.log(arr);