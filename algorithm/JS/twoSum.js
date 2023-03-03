let arr = [2, 7, 11, 15]

/**
 * 这是优化后的方法 使用哈希表进行时间优化的算法，但是这里的空间复杂度会增多
 * @param nums
 * @param target
 * @returns {[any,number]|*[]}
 */
const twoSum = (nums, target) => {
    let map = new Map();
    for (let i = 0; i <nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }else {
            map.set(nums[i], i);
        }
    }
    return [];
}


console.log(twoSum(arr, 9));

