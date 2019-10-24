{
    const text = "To jest jakiś tekst";
    let str = "\n";

    //gora
    str += "╔"
    for (let i=0; i<text.length + 4; i++) {
        str += "═";
    }
    str += "╗\n"

    //srodek
    str += "║  ";
    str += text;
    str += "  ║\n";

    //dol
    str += "╚"
    for (let i=0; i<text.length + 4; i++) {
        str += "═";
    }
    str += "╝\n"

    console.log(str);
}

//lub inna wersja

{
    const text = "To jest jakiś tekst";
    let str = `
        ╔══${"═".repeat(text.length)}══╗
        ║  ${text}  ║
        ╚══${"═".repeat(text.length)}══╝
    `;
    console.log(str);
}
