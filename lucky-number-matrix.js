var luckyNumbers = function (matrix) {
    const columnsLength = matrix[0].length
    const rowsLength = matrix.length

    let rowMaximumOfMinimums = 0
    for (const row of matrix) {
        let rowMinimum = Math.min(...row)
        rowMaximumOfMinimums = Math.max(rowMaximumOfMinimums, rowMinimum)
    }
    let colMinimumOfMaximums = Infinity
    for (let col = 0; col < columnsLength; col++) {
        let colMaximum = 0
        for (let row = 0; row < rowsLength; row++) {
            colMaximum = Math.max(colMaximum, matrix[row][col])
        }
        colMinimumOfMaximums = Math.min(colMaximum, colMinimumOfMaximums)
    }
    if (rowMaximumOfMinimums === colMinimumOfMaximums) {
        return [rowMaximumOfMinimums]
    }
    return []
};

console.log(luckyNumbers(
    [
        [3, 7, 8],
        [9, 11, 13],
        [15, 16, 17]
    ]
))
console.log(luckyNumbers(
    [[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]
))