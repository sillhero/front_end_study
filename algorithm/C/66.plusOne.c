#include <stdio.h>
#include <stdlib.h>

int* plusOne(int* digits, int digitsSize, int* returnSize){
    // 当传入的数组为空的时候 直接返回
    int *newNums = NULL;
    if (digitsSize == 0)
    {
        /* code */
        returnSize = 0;
        return  digits;
    }
    // 这里的是出现最低位不满9的情况下 直接加一然后返回
    if (digits[digitsSize - 1] < 9)
    {
        /* code */
        digits[digitsSize - 1] += 1;
        newNums = digits;
        return newNums;
    }else {
        for (int i = digitsSize - 1; i >= 0; i--) {
            digits[i] = 0;

            // 这里是第一位需要进位的情况，也就是说数组需要进行扩容
            if (i == 0)
            {
                /* code */
                // 首先需要将原数组进行扩容
                // 使用新数组来进行新容量的容器
                int *newDigits = NULL;
                newDigits = (int *)malloc(sizeof(int) * (digitsSize + 1));

                // 将原来的数据写入新的数组中
                int newSize = digitsSize + 1;
                for (int i = 1; i < newSize; i++)
                {
                    /* code */
                    newDigits[i] = 0;
                }
                newDigits[0] = 1;
                *returnSize = newSize;
                newNums = newDigits;
                return newNums;
            }
            if (digits[i] < 9)
            {
                /* code */
                digits[i] += 1;
                newNums = digits;
                return digits;
            }
        }
    }
}


int main(){
    int num[] = {1, 2, 3};
    int *nums = num;
    int *returnSize = NULL;
    nums = plusOne(nums, 3, returnSize);

    return 0;
}