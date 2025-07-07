var removeDuplicates = function (nums) {
    let i, j, k = 1
    for (i = 1, j = 1; i < nums.length && j < nums.length;) {
        if (nums[i - 1] !== nums[j]) {
            nums[i] = nums[j]
            i++
            k++
        }
        j++
    }
    for (; i < nums.length;) {
        nums[i] = undefined
        i++
    }
    return k
};

const numss = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// const numss = [1, 1, 2]
const k = removeDuplicates(numss)
console.log(k)
console.log(numss)
// Output: 2, nums = [1, 2, _]
