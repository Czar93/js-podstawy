// ## Zadanie 1
// Wypisz wszystkie nazwy państw
// countries.forEach(el => {
//     console.log(el);
// })

// ## Zadanie 2
// Wypisz średnią ludność w państwach
{
    let globalPopulation = 0;

    countries.forEach(el => {
        globalPopulation += el.population
    })

    const avgPopulation = globalPopulation / countries.length;
    console.log(`Średnia ludność w państwach na świecie to: ${avgPopulation}`);
}

//lub

{
    const globalPopulation = countries.reduce((a, b) => {
        return {population: a.population + b.population}
    }, {population: 0}).population;

    const avgPopulation = globalPopulation / countries.length;
    console.log(`Średnia ludność w państwach na świecie to: ${avgPopulation}`);
}

// ## Zadanie 3
// Wypisz ile jest państw, które mają dodatni wzrost
{
    const countryPositive = countries.filter(el => {
        return el.grow > 0
    })

    console.log(`Liczba państw z dodatnią płodnością: ${countryPositive.length}`);
}

// ## Zadanie 4
// Wypisz ile jest państw, które mają ujemny wzrost
{
    const countryNegative = countries.filter(el => {
        return el.grow < 0
    })

    console.log(`Liczba państw z ujemną płodnością: ${countryNegative.length}`);
}

// ## Zadanie 5
// Napisz ile wszystkie państwa zajmują procent powierzchni Ziemi (world_area)
{
    //podobnie do zadania 2
    const countriesArea = countries.reduce((a, b) => {
        return {land_area_in_km : a.land_area_in_km + b.land_area_in_km}
    }, {land_area_in_km : 0});

    console.log(`Wszystkie państwa zajmują powierzchni Ziemi: ${countriesArea.land_area_in_km}`);
    console.log(`Jest to ${510100000 / countriesArea.land_area_in_km}% powierzchni Ziemi`);
}

// ## Zadanie 6
// Napisz ile wynosi średnia dzietności na świecie (fertility_rate) (uwaga - niektóre kraje nie mają danych - wtedy jest null)
//dodawanie null do liczby to jak dodawanie 0
{
    let globalFertility = 0;

    countries.forEach(el => {
        globalFertility += el.fertility_rate;
    });

    console.log(`Średnia dzietność w państwach na Świecie to: ${globalFertility / countries.length}`);
}
// ## Zadanie 7
// Napisz ile wynosi średnia wieku na świecie

//ciut inne podejście niż w powyższych rozwiązaniach - generuję tablicę z latami a potem dopiero ją liczę za pomocą reduce
const globalAge = countries.map(el => {
    return el.medium_age
}).reduce((a, b) => a + b);

const globalMediumAge = globalAge / countries.length;
console.log(`Średni wiek w państwach Świata: ${globalMediumAge}`);


// ## Zadanie 8
// Wypisz wszystkie dane na temat Polski

const countryPoland = countries.find(el => el.name === "Poland");
//wypisuję dane Polski
console.groupCollapsed("Dane Polski");
console.log(countryPoland);
//dodatkowe wypisanie na bajerze
const keys = Object.keys(countryPoland);
for (const key of keys) {
    console.log(`${key} : ${ countryPoland[key] }`);
}
console.groupEnd();



// ## Zadanie 9
//  Napisz czy średnia wieku w Polsce jest większa od średniej na Świecie?
{
    if (countryPoland.medium_age > globalMediumAge) {
        console.log("Niestety Polska szybciej się starzeje niż inne państwa");
    } else if (countryPoland.medium_age < globalMediumAge) {
        console.log("Polska wolniej się starzeje niż inne państwa");
    } else {
        console.log("Średni wiek w Polsce jest taki sam jak w innych państwach.")
    }
}