const oddCells = (row, column, indices) => {
    const rows = new Array(row).fill(0)
    const columns = new Array(column).fill(0)

    for (const [i, j] of indices) {
        rows[i]++
        columns[j]++
    }
    console.log(rows, columns)

    let result = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (((rows[i] || 0) + (columns[j] || 0)) % 2 !== 0) {
                result++
            }
        }
    }
    return result
};

console.log(oddCells(2, 3, [[0, 1], [1, 1]]))