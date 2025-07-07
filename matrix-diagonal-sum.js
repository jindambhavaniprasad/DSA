var diagonalSum = function (mat) {
    const len = mat.length
    let sum = 0
    let left = 0; right = len - 1
    let i = 0
    while (i < len / 2 && left <= right) {
        if (left === right) {
            sum += mat[i][left]
        } else {
            sum += mat[i][left] + mat[i][right] + mat[len - i - 1][left] + mat[len - i - 1][right]
        }
        left++
        right--
        i++
    }
    return sum
}

console.log(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(diagonalSum([[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]]))