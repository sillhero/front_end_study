/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
     if (digits.length === 0){
         return [];
     }
     if (digits[digits.length - 1] < 9){
         digits[digits.length - 1] += 1;
         return digits;
     } else {
         for (var i = digits.length - 1; i >= 0; i--) {
             digits[i] = 0;
             if (i === 0) {
                 // 这里的优势就是能有方法直接在头部插入元素
                 // 但是在C语言中，需要重新申请空间才能
                 digits.unshift(1);
                 return digits;
             }
             if (digits[i - 1] < 9) {
                 digits[i - 1] += 1;
                 return digits;
             }
         }
     }
};

let digits = [1,9];
console.log(plusOne(digits));