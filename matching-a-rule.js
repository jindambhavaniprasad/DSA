const countMatches = function (items, ruleKey, ruleValue) {
    const ruleKeyIndex = ['type', 'color', 'name'].indexOf(ruleKey)
    let result = 0
    for (let i = 0; i < items.length; i++) {
        if (items[i][ruleKeyIndex] === ruleValue) {
            result++
        }
    }
    return result
}

const res = countMatches([["phone", "silver", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver")
console.log(res)