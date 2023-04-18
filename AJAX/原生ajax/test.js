// 快速排序

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    // 1. Pick an element, called a "pivot", from the array.
    var left = [];
    var right = [];
    var mid = arr[0];
    // 2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // 3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.
    return quickSort(left).concat(mid, quickSort(right));
}