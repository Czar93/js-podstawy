{
    const text = "Ala ma kota";

    //male
    console.log(text.toLowerCase());

    //duze
    console.log(text.toUpperCase());

    //mieszane
    let newStr = "";
    for (let i=0; i<text.length; i++) {
        if (i % 2 === 0) {
            newStr += text[i].toUpperCase();
        } else {
            newStr += text[i].toLowerCase();
        }
    }
    console.log(newStr);

    //Ala na Ole
    console.log(text.replace("Ala", "Ola"));
}