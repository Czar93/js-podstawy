{
    let str = "";
    const count = 7;

    for (let i=0; i<=count; i++) {
        str += i;

        for (let j=0; j<i; j++) {
            str += "-";
        }
    }

    console.log(str);
}