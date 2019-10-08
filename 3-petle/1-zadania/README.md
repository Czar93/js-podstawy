![](../../kursjs.png)

# KursJS - pętle i instrukcje warunkowe

## Zadanie 1
Za pomocą pętli wypisz w konsoli tekst `******`
Gwiazdki powinny być w jednej linii.

## Zadanie 2
Za pomocą pętli wypisz w konsoli tekst `12345678910`

## Zadanie 3
Za pomocą pętli (nie musi być pojedyncza) wypisz w konsoli tekst:

```
╔═══════════════════════╗
║  To jest jakiś tekst  ║
╚═══════════════════════╝
```

Tekst w ramce powinien być postawiony pod zmienną, tak by łatwo można było go zmienić. Narożniki wygeneruj po prostu kopiując odpowiedni znak z powyższego tekstu.

## Zadanie 4
Zrób losowanie 10 liczb z przedziału 1-10. Wypisz je w konsoli. Jeżeli przynajmniej połowa z nich jest większa niż 5, wtedy w konsoli wypisz tekst `udało się`, w przeciwnym razie wypisz w konsoli tekst `niestety nie tym razem`. Zadanie można wykonać na wiele sposobów - spróbuj pokombinować.

## Zadanie 5
Stwórz zmienną `n`, pod którą postawisz jakąś liczbę całkowitą oraz dodatkową zmienną `txt`, która będzie zawierać jakiś tekst np. `maslo`.

Sprawdź czy liczba n jest dodatnia. Jeżeli jest wypisz w konsoli tekst, który będzie powtórzeniem n razy tekstu ze zmiennej `txt`. Przykładowo:

```
input -> "kot";
n -> 3
wynik -> "kotkotkot";
```

Powtórzenie tekstu wygeneruj za pomocą pętli. Po uzyskaniu efektu, powtórzenie wygeneruj za pomocą metody [repeat()](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/String/repeat) dla stringów.

## Zadanie 7
Za pomocą pętli wygeneruj poniższy tekst:

`01-2--3---4----5-----6------7-------`

Zadanie wykonaj dla zmiennej równej `n=7`

## Zadanie 8
Za pomocą `prompt()` pobierz od użytkownika liczbę z przedziału 1-1000. Pamiętaj, że prompt zwraca zawsze tekst, więc skonwertuj ją na liczbę.

Robiąc pętlę while generuj losową liczbę z przedziału 1-1000.
Wypisz w konsoli ile wykonało się iteracji aż wylosowana liczba była równa tej, którą podał użytkownik.

