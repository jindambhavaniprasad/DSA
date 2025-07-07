const mergeSortedArrays = (nums1, m, nums2, n) => {
    let mIndex = m - 1
    let nIndex = n - 1
    let rightIndex = m + n - 1

    while (nIndex >= 0) {
        if (mIndex >= 0 && nums1[mIndex] > nums2[nIndex]) {
            nums1[rightIndex] = nums1[mIndex]
            mIndex--
        } else {
            nums1[rightIndex] = nums2[nIndex]
            nIndex--
        }
        rightIndex--
    }
    return nums1
}

const nums1 = [1]
const nums2 = []
mergeSortedArrays(nums1, 1, nums2, 0)
console.log(nums1)