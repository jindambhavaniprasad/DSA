const checkIfPangram = function (sentence) {
    const set = new Set()
    for (let i = 0; i < sentence.length; i++) {
        if (!set.has(sentence[i])) {
            set.add(sentence[i])
        }
    }
    return set.size === 26
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))