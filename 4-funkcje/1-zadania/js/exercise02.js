{
    const subTab = function(arr) {
        let sum = 0;
        for (let i=0; i<arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    }

    //lub mozna tez za pomocą reduce()
    // const sumTab2 = function(arr) {
    //     return arr.reduce((a, b) => a + b);
    // }

    const tab = [1,2,3,4,5];
    const sum = sumTab(tab);
    console.log(sum);
}
