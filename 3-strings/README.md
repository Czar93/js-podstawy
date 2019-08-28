![](../kursjs.png)

# KursJS - strings

## Zadanie 1
Stwórz zmienną text z dowolnym zdaniem. Wypisz w konsoli to zdanie i jego długość.

## Zadanie 2
Mamy tekst: `Koty i psy to fajne zwierzaki`
Wypisz w konsoli liczbę wyrazów w tym zdaniu.

## Zadanie 3
Ktoś w formularzu wpisał imię "piotrek" z małej litery. Super bohater wkracza do akcji i musi je poprawić.
Popraw to imię tak by zaczynało się dużą literą.

## Zadanie 4
Mamy zmienną:
```
const text = "Ala ma kota";
```
Sprawdź czy występuje w niej słowo "kot". Jeżeli tak - wypisz w konsoli "Zdanie zawiera słowo kot", w przeciwnym razie wypisz "Zdanie nie zawiera słowa kot".

## Zadanie 5
Korzystając z poznanych funkcji dla stringów zamień poniższy tekst:
```
const text = "Uczę się stringów w C++";
```
na
`"Uczę się stringów w Javascript"`
Zadanie zrób na 2 sposoby: z wykorzystaniem **replace()** oraz bez korzystania z tej metody.

## Zadanie 6
Powiedzmy, że mamy zmienną z adresem strony:
```
let url = "http://mojastrona.pl"
```
Chcemy do tego adresu po znaku zapytania wstawić zmienną "text", którą potem ewentualnie mogła by odczytać inna podstrona.
Zmienna ta powinna mieć wartość tekstu z 5 zadania:

```
let url = "http://mojastrona.pl?text=Uczę się stringów w Javascript"
```

Jak wiesz, spacji i podobnych znaków nie może być w adresie strony. Za pomocą odpowiednich zmiennych, dodawania i wykorzystując odpowiednie metody uzyskaj prawidłowy odpowiednio zakodowany adres url.

## Zadanie 7
Mamy zmienną:
```
const text = "Ala ma kota";
```
Wypisz w konsoli:
- tekst pisany małymi literami
- tekst pisany dużymi literami
- tekst pisany naprzemiennie dużymi i małymi literami
- zamień imię Ala na Ola i wypisz wynik w konsoli

## Zadanie 8
Wygeneruj pod zmienną `uniqueID` tekst będący losowym ciągiem liter i cyfr o długości 20. Nie narzucam tutaj sposobu rozwiązania.