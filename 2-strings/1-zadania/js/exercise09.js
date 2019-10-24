{
    let uniqueID = "";
    const chars = 'abcdefghijklmnopqrstuwxyz1234567890';

    for (let i=0; i<20; i++) {
        const index = Math.floor(Math.random()*chars.length) + 1;
        uniqueID += chars[index];
    }

    console.log(uniqueID);
}