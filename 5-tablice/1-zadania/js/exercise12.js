{
    const tab = [1,2,3, [4,5,6, [7, 8]], 9, 10];
    const newTab = tab.flat(Infinity);
    const sum = newTab.reduce(function(a, b) {
        return a + b;
    })
    console.log("Suma liczb to: ", sum)
    console.log("Średnia liczb to: ", sum / newTab.length)
}