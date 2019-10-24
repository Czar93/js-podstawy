{
    const tab = [];
    const min = 10;
    const max = 20;

    for (let i=0; i<10; i++) {
        const nr = Math.floor(Math.random()*(max-min+1)+min)
        tab.push(nr);
    }

    let min = tab[0];
    for (let i=1; i<tab.length; i++) {
        if (tab[i] < min) {
            min = tab[i];
        }
    }

    let max = tab[0];
    for (let i=1; i<tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }
    }

    console.log(min, max);

    //Czy znasz lepszy sposób od zastosowania pętli?
    //chyba tak...
    {
        const min = Math.min(...tab);
        const max = Math.max(...tab);
        console.log(min, max);
    }
}