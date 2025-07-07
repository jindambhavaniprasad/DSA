var twoSum = function (nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i]
        if (map.has(comp)) {
            return [map.get(comp), i]
        }
        map.set(nums[i], i)
    }
    return []
};

console.log(twoSum([3, 3], 6))