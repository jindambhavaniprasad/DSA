const searchInsertPosition = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        const middle = Math.ceil((left + right) / 2)
        if (nums[middle] === target) {
            return middle
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return left
}

const pos = searchInsertPosition([1, 3, 5, 6], 7)
console.log(pos)