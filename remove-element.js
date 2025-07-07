var removeElement = function (nums, val) {
    let k = 0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[k] = nums[j]
            k++
        }
    }
    return k
};

const numss = [0, 1, 2, 2, 3, 0, 4, 2]
// const numss = [1, 1, 2]
const k = removeElement(numss, 2)
console.log(k)
console.log(numss)
// Output: 2, nums = [1, 2, _]
