function showFile() {
    let count = 0;

    return function(name) {
        count++;
        console.log(`${count}. ${name}`);
    }
}

const f = showFile();
f("plik.jpg")
f("inny.jpg")
f("my.txt")

