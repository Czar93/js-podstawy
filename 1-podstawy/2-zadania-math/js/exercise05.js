const min = 1;
const max = 10;
const nr = Math.floor(Math.random()*(max-min+1)+min)
const userNr = prompt(`Podaj liczbę całkowitą z przedziału ${min}-${max}`);

console.log(nr) //oszukujemy...

if (parseInt(userNr) === nr) {
    console.log("trafiłeś!")
} else {
    console.log("niestety nie tym razem");
}