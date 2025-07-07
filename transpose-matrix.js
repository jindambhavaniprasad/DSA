const transpose = function (matrix) {
    const newArray = Array.from({ length: matrix[0].length }, () => Array(matrix.length).fill(null))
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            newArray[j][i] = matrix[i][j]
        }
    }
    return newArray
}

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(transpose([[1, 2, 3], [4, 5, 6]]))