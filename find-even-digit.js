const findNumbers = function (nums) {
    let count = 0
    for (const num of nums) {
        if (String(num).length % 2 === 0) {
            count++
        }
    }
    return count
}

console.log(findNumbers([12, 345, 2, 6, 7896]))