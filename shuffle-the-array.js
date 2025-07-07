const shuffleTheArray = (nums, n) => {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(nums[i], nums[n + i])
    }
    return arr
}

const res = shuffleTheArray([2, 5, 1, 3, 4, 7], 3)
console.log(res)