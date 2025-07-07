const concatenate = (arr) => {
    const ans = new Array(arr.length * 2)
    let l = 0; r = arr.length
    while (l < arr.length) {
        ans[l] = arr[l]
        ans[r] = arr[l]
        l++
        r++
    }
    return ans
}

const ans = concatenate([1, 2, 3, 1])
console.log(ans)
