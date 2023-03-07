#include<stdio.h>
#include<stdlib.h>
void moveZeroes(int* nums, int numsSize);



int main() {
    int nums[7] = {1,2,4,0,4,0,3};
    printf("%d\n", sizeof(nums)/sizeof(int));
    moveZeroes(nums, 7);
    for (int i = 0; i < 7; i++)
    {
        /* code */
        printf("%d\t",nums[i]);
    }
    
    return 0;
}

void moveZeroes(int* nums, int numsSize){
    int k = 0; // 慢指针
    for (int i = 0; i < numsSize; i++){
        if (nums[i] != 0)
        {
            /* code */
            nums[k++] = nums[i];
        }
    }
    // 将移动后的数组的慢指针后面的数全部返回为0
    for (int i = k; i < numsSize; i++)
    {
        /* code */
        nums[i] = 0;
    }
}