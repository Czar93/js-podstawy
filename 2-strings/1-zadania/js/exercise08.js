{
    const min = 10;
    const max = 100000;
    for (let i=0; i<10; i++) {
        const nr = Math.floor(Math.random()*(max-min+1)+min)
        console.log((""+nr).padStart(6, " "));
    }
}