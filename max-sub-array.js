var maxSubArray = function (nums) {
    let result = nums[0]
    let sum = 0
    for (const num of nums) {
        if (sum < 0) {
            sum = 0
        }
        sum += num
        result = Math.max(sum, result)
    }
    return result
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([5, 4, -1, 7, 8]))
console.log(maxSubArray([-2, -2]))