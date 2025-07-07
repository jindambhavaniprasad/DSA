const smallerNumbersThanCurrent = function (nums) {
    const sorted = Array.from(nums).sort((a, b) => a - b)
    const map = new Map()
    sorted.forEach((s, i) => map.has(s) ? null : map.set(s, i))
    return nums.map(n => map.get(n))
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))