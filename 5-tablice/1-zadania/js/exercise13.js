function montName(nr) {
    const month = [
        "styczeń",
        "luty",
        "marzec",
        "kwiecień",
        "maj",
        "czerwiec",
        "lipiec",
        "sierpień",
        "wrzesień",
        "październik",
        "listopad",
        "grudzień",
    ]

    if (typeof nr === "number" && nr > 0 && nr < 12) {
        return month[nr];
    } else {
        return false;
    }
}

console.log(montName(10));
console.log(montName(5));
console.log(montName("ala"));
console.log(montName());