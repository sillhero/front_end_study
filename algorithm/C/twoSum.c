#include<stdio.h>
#include<stdlib.h>

int* twoSum(int* nums, int numSize, int target, int* returnSize);

int main() {
    printf("hello C\n");
    int arr[4] = {2, 7, 11, 15};
    int *result = malloc(sizeof(int) * 2);
    int result_size = 0;
    result = twoSum(arr, 4, 9, &result_size);
    printf("%d----%d", result[0], result[1]);
}


/**
 * @brief 暴力求法
 * 
 * @param nums 
 * @param numSize 
 * @param target 
 * @param returnSize 
 * @return int* 
 */
int* twoSum(int* nums, int numSize, int target, int* returnSize) {
    for (int i = 0; i < numSize; i++) {
        for (int j = i + 1; j < numSize; j++) {
            if (nums[i] + nums[j] == target) {
                int *result = malloc(sizeof(int) * 2);
                result[0] = i;
                result[1] = j;
                *returnSize = 2;
                return result;
            }
        }
    }
}