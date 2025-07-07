var maximumPopulation = function (logs) {
    let line = new Array(2052).fill(0);
    for (let i = 0; i < logs.length; i++) {
        line[logs[i][0]]++
        line[logs[i][1]]--
    }
    for (let i = 0; i < line.length - 1; i++) {
        line[i + 1] += line[i]
    }
    let max = 0
    let idx = 0
    for (let i = 0; i < line.length; i++) {
        if (max < line[i]) {
            idx = i
        }
        max = Math.max(line[i], max)
    }
    return idx
};

console.log(maximumPopulation([[1993, 1999], [2000, 2010]]))
console.log(maximumPopulation([[1950, 1961], [1960, 1971], [1970, 1981]]))