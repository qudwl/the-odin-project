function fibs(num) {
    const arr = []

    for(let i = 0; i < num; i++) {
        if (i === 0) arr.push(0)
        else if (i === 1) arr.push(1)
        else {
            arr.push(arr.at(arr.length - 2) + arr.at(arr.length - 1))
        }
    }

    return arr
}

function print(msg) {
    console.log(msg)
}

print(fibs(8))

