{
    let url = "http://mojastrona.pl"
    let text = "Uczę się stringów w Javascript";
    let myUrl = `${url}?text=${encodeURI(text)}`;
    console.log(myUrl);
}