const largestSubarraySum = (arr) => {
    let largestSum = 0

    arr.forEach((n, i) => {
        let currentSum = n
        arr.slice(i + 1).forEach((x) => {
            if (currentSum > largestSum) {
                largestSum = currentSum
            }
            currentSum += x
        })
    })

    return largestSum
}