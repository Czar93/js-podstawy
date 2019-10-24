function mix(text) {
    let newStr = "";
    for (let i=0; i<text.length; i++) {
        if (i % 2 === 0) {
            newStr += text[i].toUpperCase();
        } else {
            newStr += text[i].toLowerCase();
        }
    }
    return newStr;
}

console.log(mix("ala ma kota"));
console.log(mix("kolorowanka"));