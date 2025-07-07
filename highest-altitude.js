var largestAltitude = function (gain) {
    let max = 0
    let current = 0
    gain.forEach(e => {
        current += e
        max = Math.max(current, max)
    })
    return max
}

console.log(largestAltitude([44, 32, -9, 52, 23, -50, 50, 33, -84, 47, -14, 84, 36, -62, 37, 81, -36, -85, -39, 67, -63, 64, -47, 95, 91, -40, 65, 67, 92, -28, 97, 100, 81]))
