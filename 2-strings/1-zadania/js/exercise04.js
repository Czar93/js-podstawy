{
    const text = "Ala ma kota";

    if (text.includes("kot")) {
        console.log("Zdanie zawiera słowo kot");
    } else {
        console.log("Zdanie nie zawiera słowa kot");
    }

    if (text.includes("kot") !== -1) {
        console.log("Zdanie zawiera słowo kot");
    } else {
        console.log("Zdanie nie zawiera słowa kot");
    }

    if (~text.includes("kot")) {
        console.log("Zdanie zawiera słowo kot");
    } else {
        console.log("Zdanie nie zawiera słowa kot");
    }
}