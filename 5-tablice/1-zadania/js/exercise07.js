{
    const tab = [
        "xloremipsumdolor",
        "kloremipsum",
        "aloremipsumdol",
        "blor",
        "cloremipsu",
        "gloremip",
    ]

    tab.sort(function(a, b) {
        return a.length - b.length;
    })

    console.log(tab);
}