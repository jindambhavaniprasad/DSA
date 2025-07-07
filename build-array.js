const buildArray = (nums) => {
    for (let i = 0; i < nums.length; i++)
        nums[i] += (1024 * (nums[nums[i]] % 1024))

    for (let i = 0; i < nums.length; i++)
        nums[i] = parseInt(nums[i] / 1024)

    return nums
}

const ans = buildArray([0, 2, 1, 5, 3, 4])
console.log(ans)