var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse().map(j => j === 0 ? 1 : 0)
    }
    return image
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))