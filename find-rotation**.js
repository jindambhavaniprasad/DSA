var findRotation = function (mat, target) {
    let j = 0
    for (let i = mat.length - 1; i >= 0 && j < target.length; i--) {
        console.log(i, mat[i].join(''), j, target[j].join(''))
        if (mat[i].join('') !== target[j].join('')) {
            return false
        }
        j++
    }
    return true
};

console.log(findRotation([[0,0],[0,1]], [[0,0],[1,0]]))