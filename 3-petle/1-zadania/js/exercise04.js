{
    const min = 1;
    const max = 10;
    const n = 10; //liczba losowan
    let count = 0; //ile liczb jest wiekszych niz 5

    for (let i=0; i<n; i++) {
        const nr = Math.floor(Math.random()*(max-min+1)+min);
        if (nr > 5) {
            count++;
        }
    }

    if (count >= n / 2) {
        console.log(`udało się`);
    } else {
        console.log(`niestety nie tym razem`);
    }
}