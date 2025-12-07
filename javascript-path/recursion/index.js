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

function print(msg) {
    console.log(msg)
}

print(fibs(8))
print(fibsRec(8))
