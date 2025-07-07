const numIdenticalPairs = function (nums) {
    let ans = 0
    const cnt = {}
    for (let num of nums) {
        ans += cnt[num] || 0
        cnt[num] = (cnt[num] || 0) + 1
    }
    return ans
}

console.log(numIdenticalPairs([1,2,3,1,1,3]))