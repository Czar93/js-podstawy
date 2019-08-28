![](../../kursjs.png)

# KursJS - tablice

## Zadanie 1
1. W powyższych danych jest "str" który zawiera magiczny ciąg
2. Na bazie tego ciągu wygeneruj 2 wymiarową tablicę `tab`:
   - do głównego podziału użyj odpowiedniej metody i znaku `/`
   - uzyskane kawałki zamień na tablice za pomocą znaku `,`
   W wyniku powinieneś uzyskać 2 wymiarową tablicę tab:
   `tab[0] = [0,0,0,0,0,0,0,...]`
   `tab[1] = [0,0,0,2,2,2,2,...]`

3. zrób pętle po 2 wymiarowej uzyskanej tablicy tab
4. Każdą pobraną wartość z tablicy zapisuj jako:
    `text += '<div style="background:' + pobranyKolor + '"></div>';`
    wartość pobranyKolor pobieraj z tablicy colors, gdzie indeks koloru pobierzesz z wartości danego indeksu podtablicy tab
5. Po zakończeniu każdej tablicy 2-ego wymiaru, do tekstu dodawaj `"<br>"`
6. Pkt 1-5 zawrzyj w funkcji `generateText()` która jako parametr przyjmie str i zwróci wygenerowany text.
7. W rezultacie powinieneś otrzymać rysunek