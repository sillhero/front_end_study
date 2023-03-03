#include <stdio.h>
#include <stdlib.h>

// int removeDuplicates(int* nums, int numsSize){
//     int fontIndex = 0;
//     int afterIndex = 0;
//     for(int i = 0; i < numsSize && fontIndex < numsSize; i++){
//          if (nums[fontIndex] == nums[afterIndex])
//          {
//             /* code */
//             fontIndex++;
//          }else{
//             afterIndex++;
//             nums[afterIndex] = nums[fontIndex];
//             fontIndex++;
//          }
//     }
//     return afterIndex;
// }

// int main() {
//     int nums[] = {1, 1, 2};
//     int length = removeDuplicates(nums, 3);
//     printf("%d\n", length);
//     return 0;
// }


int removeDuplicates(int* nums, int numsSize) {
    if (numsSize == 0)
    {
        /* code */
        return 0;
    }
    int fast = 1;
    int slow = 1;
    while (fast < numsSize - 1)
    {
        /* code */
        if (nums[fast] != nums[fast - 1])
        {
            /* code */
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
}



int main() {
    int nums[] = {1, 1, 2};
    int length = removeDuplicates(nums, 3);
    printf("%d\n", length);
    return 0;
}