const sumOfOneDArray = (nums) => {
    let currRes = 0
    for (let i = 0; i < nums.length; i++) {
        nums[i] += currRes
        currRes = nums[i]
    }
    return nums
}

const ans = sumOfOneDArray([3,1,2,10,1])
console.log(ans)