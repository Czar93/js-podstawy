const tab = generateRandomTable(100, 200, 10);

function getMinFromTab(arr) {
    //mozna i tak:
    //return Math.min(...arr);

    //ale trenujemy pętle!
    let min = arr[0];
    for (let i=1; i<arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}

console.log(getMinFromTab(tab));