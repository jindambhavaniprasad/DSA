/**
 * 
 * @param {number[]} num 
 * @param {*} k 
 * @returns 
 */
var addToArrayForm = function (num, k) {
    const result = [];
    let i = num.length - 1;

    while (i >= 0 || k > 0) {
        if (i >= 0) {
            k += num[i--]
        }
        result.unshift(k % 10);
        k = Math.floor(k / 10);
    }

    return result;
};

console.log(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1))
