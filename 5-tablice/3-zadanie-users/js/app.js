// ## Zadanie 1
// Wypisz imiona i nazwiska użytkowników oraz ich email np.

//w razie czego wypisuję sobie cała tablicę, albo używam zakładki sources w debugerze by zobaczyć
//jak wyglądają dane
//console.log(users)

users.forEach(user => {
    console.log(user.name, user.email)
})

// ## Zadanie 2
// Wypisz tablicę z wszystkimi użytkownikami pełnoletnimi

const adult = users.filter(user => {
    return user.age >= 18
})
console.table(adult);

// ## Zadanie 3
// Wypisz tablicę z wszystkimi kobietami
const woman = users.filter(user => {
    return user.gender === "female"
})
console.table(adult);

// ## Zadanie 4
// Wypisz tablicę użytkowników którzy mają tag "dolor"
const dolorMan = users.filter(user => {
    return user.tags.includes("dolor");
})
console.table(dolorMan);

// ## Zadanie 5
// Wypisz true/false w zależności od tego czy wszyscy użytkownicy są pełnoletni
const allAdult = users.every(user => {
    return user.age >= 18
})
console.table(allAdult);

// ## Zadanie 6
// Wypisz true/false w zależności od tego czy chociaż jeden z użytkowników jest pełnoletni
const someAdult = users.some(user => {
    return user.age >= 18
})
console.table(someAdult);

// ## Zadanie 7
// Wypisz nową tablicę zawierającą tylko imiona użytkowników które będą pisane dużymi literami
const namesBig = users.map(user => {
    return user.name.toUpperCase();
})
console.table(namesBig);

// ## Zadanie 8
// Wypisz liczbę kobiet i liczbę mężczyzn
// Wypisz tekst która grupa jest liczniejsza (np. "kobiety wygrywają")
const womanCount = woman.length;
const manCount = users.length - woman.length; //yhy....
if (womanCount > manCount) {
    console.log("Kobiety są górą.");
} else {
    console.log("Facetów jest więcej ale i tak kobiety wygrywają.");
}