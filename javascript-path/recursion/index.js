/**
 * fibonnaci numbers with loops
 * 
 * @param {number} num 
 * @returns an array of fibonnaci numbers
 */
function fibs(num) {
    const arr = []

    for (let i = 0; i < num; i++) {
        if (i === 0) arr.push(0)
        else if (i === 1) arr.push(1)
        else {
            arr.push(arr.at(arr.length - 2) + arr.at(arr.length - 1))
        }
    }

    return arr
}

/**
 * fibonnaci numbers with recursion
 * 
 * @param {number} num 
 * @returns an array of fibonnaci numbers
 */
function fibsRec(num) {
    if (num === 0) { 
        return [] 
    }
    else if (num === 1) { 
        const arr = fibsRec(0)
        arr.push(0)
        return arr
    } else if (num === 2) {
        const arr = fibsRec(1)
        arr.push(1)
        return arr
    } else {
        const arr = fibsRec(num - 1)
        arr.push(arr.at(arr.length - 2) + arr.at(arr.length - 1))
        return arr
    }
}

/**
 * Merge sort with recursion
 * 
 * @param {Array} arr 
 * @returns sorted array
 */
function mergeSort(arr) {
    if (arr.length === 0) return []
    if (arr.length === 1) return arr
    const split = Math.floor(arr.length / 2)
    let arr1 = arr.slice(0, split)
    let arr2 = arr.slice(split)
    const resultArr = []

    arr1 = mergeSort(arr1)
    arr2 = mergeSort(arr2)

    let i1 = 0, i2 = 0

    while(arr1.length > i1 && arr2.length > i2) {
        if (arr1[i1] <= arr2[i2]) {
            resultArr.push(arr1[i1])
            i1++
        } else {
            resultArr.push(arr2[i2])
            i2++
        }
    }

    if (arr1.length > i1) {
        resultArr.push(...arr1.slice(i1))
    } else if (arr2.length > i2) {
        resultArr.push(...arr2.slice(i2))
    }

    return resultArr
}

function print(msg) {
    console.log(msg)
}

print(`Fibonnaci with loops: [${fibs(8)}]`)
print(`Fibonnaci with recursion: [${fibsRec(8)}]`)

print(`Merge Sort []: [${mergeSort([])}]`)
print(`Merge Sort [73]: [${mergeSort([73])}]`)
print(`Merge Sort [1, 2, 3, 4, 5]: [${mergeSort([1, 2, 3, 4, 5])}]`)
print(`Merge Sort [3, 2, 1, 13, 8, 5, 0, 1]: [${mergeSort([3, 2, 1, 13, 8, 5, 0, 1])}]`)
print(`Merge Sort [105, 79, 100, 110]: [${mergeSort([105, 79, 100, 110])}]`)