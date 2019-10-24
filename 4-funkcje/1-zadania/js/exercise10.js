function bigNames(arr) {
    const newTab = [];
    for (let i=0; i<arr.length; i++) {
        newTab.push(arr[i].toUpperCase());
    }
    return newTab;
}

function mixNames(arr) {
    const newTab = [];
    for (let i=0; i<arr.length; i++) {
        newTab.push( mix(arr[i]) ); //uzywamy funkcji z 4 zadania
    }
    return newTab;
}


const tab = ["Ania" , "Marcin" , "Bartek" , "Piotr"];
console.log(bigNames(tab));
console.log(mixNames(tab));