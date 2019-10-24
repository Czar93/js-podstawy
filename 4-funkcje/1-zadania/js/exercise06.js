const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";

function fix(txt, char) {
    const tab = txt.split(char);
    tab.sort();
    return tab.join(char);
}

console.log(fix(str, "|"));