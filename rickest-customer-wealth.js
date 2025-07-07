const maximumWealth = (accounts) => {
    for (let i = 0; i < accounts.length; i++) {
        accounts[i] = accounts[i].reduce((a, b) => a + b)
    }
    let res = 0
    let l = 0, r = accounts.length - 1
    while (l < accounts.length / 2) {
        console.log(l, r)
        if (accounts[l] > accounts[r] && res < accounts[l]) {
            res = accounts[l]
        } else if (res < accounts[r]) {
            res = accounts[r]
        }
        l++
        r--
    }
    return res
}

const res = maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])
console.log(res)