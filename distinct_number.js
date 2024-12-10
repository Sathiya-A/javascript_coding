function distinct_number(arr) {
    arr = arr.sort((a, b) => {
        return a - b
    })
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            return arr[i] + 1
        }

    }
    return ''
}

module.exports = distinct_number;