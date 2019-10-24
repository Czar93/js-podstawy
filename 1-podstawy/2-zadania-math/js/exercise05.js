{
    const min = 10;
    const max = 20;

    const randomNr = Math.floor(Math.random()*(max-min+1)+min);
    const userNr = prompt(`Podaj liczbę całkowitą z przedziału ${min}-${max}`);

    console.log(randomNr) //cheat

    if (parseInt(userNr, 10) === randomNr) {
        console.log("trafiłeś!");
    } else {
        console.log("niestety nie tym razem");
    }
}