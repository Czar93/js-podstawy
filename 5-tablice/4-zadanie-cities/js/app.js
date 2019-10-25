// # Zadanie 1
// Wypisz ile miast jest w Polsce

const count = cities.length;
console.log(count);

// ## Zadanie 2
// Wypisz ile jest ludzi w tych miastach
let people = 0;
cities.forEach(city => {
    people += city.people;
})
console.log(people);

//lub
{
    const people = cities.reduce(function(a, b) {
        return {people: a.people + b.people}
    }, {people : 0}).people;

    console.log(people);
}

// ## Zadanie 3
// Wypisz pierwsze miasto, w którym jest ponad 10000 ludzi
const firstBig = cities.find(function(city) {
    return city.people > 10000
});
console.log(firstBig);


// ## Zadanie 4
// Wypisz miasta, w których ludzi jest ponad średnią
const avg = people / cities.length;
const avgCities = cities.filter(function(city) {
    return city.people > avg
});
console.log(avgCities);

// ## Zadanie 5
// Wypisz nazwy wszystkich miast, w których jest ponad 10000 ludzi
const bigCities = cities.filter(function(city) {
    return city.people > 10000
})

bigCities.forEach(function(city) {
    console.log(city.name);
})


// ## Zadanie 6
// Wypisz czy więcej jest miast z > 10000 ludzi czy mniejszych
console.log(`
    W Polsce jest:
    miast w ludnością  > 10000 : ${bigCities.length}
    miast z ludnością <= 10000 : ${cities - bigCities.length}
`);

if (bigCities.length > bigCities.length) {
    console.log("Co oznacza, że dużych miast jest więcej");
} else if (bigCities.length < bigCities.length) {
    console.log("Co oznacza, że małych miast jest więcej")
} else {
    console.log("Co oznacza że jest równo")
}
