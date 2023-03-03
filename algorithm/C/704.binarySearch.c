#include <stdio.h>

int search(int* nums, int numsSize, int target){
    int left = 0, right = numsSize - 1;
    while(left <= right){
        int mid = (left + right) / 2;
        if (nums[mid] == target)
        {
            /* code */
            return mid;
        }else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;;
        }
    }
    return -1;
}
int main(){
    int nums[] = {-1,0,3,5,9,12};
    int result = search(nums, 6, 9);
    printf("%d\n", result);
}