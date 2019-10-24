{
    const tabUsers = [
        {name : "Marcin", age: 14},
        {name : "Piotr", age: 18},
        {name : "Agnieszka", age: 13},
        {name : "Weronika", age: 20}
    ]

    for (const user of tabUsers) {
        if (user.age >= 18) {
            console.log(user.name);
        }
    }

    //lub

    tabUsers
        .filter(user => user.age >= 18)
        .forEach(user => console.log(user.name));
}