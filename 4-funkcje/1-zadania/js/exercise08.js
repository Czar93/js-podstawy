function generateRandomTable(min, max, count) {
    const tab = [];
    for (let i=0; i<count; i++) {
        const nr = randomBetween(min, max);
        tab.push(nr);
    }
    return tab;
}

console.log( generateRandomTable(1, 10, 5) );
console.log( generateRandomTable(10, 50, 15) );