var sumZero = function (n) {
    const res = n % 2 === 0 ? [] : [0]
    let left = -1
    let right = 1
    while (right <= n / 2) {
        res.unshift(left)
        res.push(right)
        left--
        right++
    }
    return res
};

console.log(sumZero(4))