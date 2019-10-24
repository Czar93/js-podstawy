{
    const files = [
        "zdjecie.jpg",
        "wakacje.jpg",
        "kolekcja.filmow.jpg",
        "mem.gif",
        "wpis.na.blog.txt",
        "auto.png",
        "archiwum.zip",
        "dokument.txt",
        "paczka.zip",
        "kwiatek.png"
    ]

    files.sort(function(a, b) {
        const ext1 = a.substr(a.lastIndexOf('.'));
        const ext2 = b.substr(b.lastIndexOf('.'));

        return ext1.localeCompare(ext2);
    })
}