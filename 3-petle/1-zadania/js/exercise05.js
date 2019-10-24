{
    const n = 10;
    const txt = "maslo";
    if (n > 0) {
        let newStr = "";
        for (let i=0; i<n; i++) {
            newStr += txt;
        }
        console.log(newStr);
    }
}

//w wersji z repeat()

{
    const n = 10;
    const txt = "maslo";
    console.log(txt.repeat(n));
}