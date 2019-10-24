function randomBetween(min = 0, max = 10) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

console.log(randomBetween())
console.log(randomBetween(100, 1000));