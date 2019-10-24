{
    const min = 1;
    const max = 1000;
    const nrUser = prompt(`Podaj liczbę z zakresu ${min} - ${max}`);
    let randomNr = Math.floor(Math.random()*(max-min+1)+min);
    let count = 0;

    while (randomNr !== parseInt(nrUser, 10)) {
        randomNr = Math.floor(Math.random()*(max-min+1)+min);
        count++;
    }

    console.log("Liczba iteracji do zgadnięcia to: ", count);
}