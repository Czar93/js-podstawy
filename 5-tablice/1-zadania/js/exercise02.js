{
    const tab = ["kot", "pies", "świnka", "chomik", "ptakko"];

    for (let i=0; i<tab.length; i++) {
        console.log(tab[i], tab[i].length);
    }

    for (const el of tab) {
        console.log(el, el.length);
    }

    tab.forEach(function(el) {
        console.log(el, el.length);
    });
}