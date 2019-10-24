function multiply(nr1, nr2) {
    if (typeof nr1 === "number" && typeof nr2 === "number") {
        return nr1 * nr2;
    } else {
        return false;
    }
}

console.log(  multiply(10, 20)  );
console.log(  multiply(10, "ala")  );
console.log(  multiply()  );