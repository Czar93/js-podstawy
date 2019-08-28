![](../../kursjs.png)

# KursJS - funkcje

## Zadanie 1
Napisz funkcję, która przyjmie jeden parametr - dowolny tekst
Funkcja niech ZWRACA tekst `Liczba liter: ....` gdzie .... to liczba liter tekstu.

## Zadanie 2
Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca wynik (sumę).
Wynik użycia funkcji podstaw pod zmienną i wypisz w konsoli.

## Zadanie 3
Jaki będzie rezultat działania poniższego kodu?

```
const txt = "Marcin";

function print(txt) {
    console.log(txt);
}

print();
```

## Zadanie 4
Napisz funkcję, która przyjmie dowolny tekst
Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:
`input -> Ala ma kota`
`output -> AlA Ma kOtA`

## Zadanie 5
Napisz funkcje, która będzie wymagać 2 atrybutów.
Funkcja niech sprawdza, czy oba atrybuty są numerami.
Funkcja ma zwracać iloczyn (*) obu liczb.
Jeżeli któryś z atrybutów nie jest liczba, funkcja niech zwraca false.

## Zadanie 6
Mamy przykładowy tekst:

```
const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
```

Napisz funkcję, która przyjmie 2 atrybuty:
- tekst
- znak rozdziału (np. `|`)

Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.

`input -> "Ania|Marcin|Bartek"`
`output -> "Ania|Bartek|Marcin"`

Wywołaj tę funkcję przekazując do niej str z początku zadania

## Zadanie 7
Wygeneruj pod zmienną `tab` 10-elementową tablicę z losowymi liczbami.
Napisz funkcję **getMinFromTab**, do której przekażesz powyższą tablicę.
Funkcja powinna zwrócić najmniejszą liczbę z tablicy.
Za pomocą console.log wypisz wartość zwróconą przez funkcję.

## Zadanie 8
Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.

Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.

`input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]`
`output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]`
`output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]`

## Zadanie 9
Napisz samo wywołujące się wyrażenie funkcyjne (IIFE), które będzie przyjmować 2 parametry: name i age. Funkcja powinna wypisać w konsoli tekst "Marek ma 10 lat".

## Zadanie 10
Napisz funkcję showFile, która przyjmować będzie jeden parametr `fileName`, do którego przy wywołaniu będziesz podawać nazwę plików (jako string).
Funkcja powinna przy kolejnych wywołaniach wypisywać teksty w konsoli np. `1. plik.jpg`, `2. inny.jpg`, `3. my.txt`. Przy każdym odpaleniu funkcji automatycznie powinien zwiększyć się licznik. Wykorzystaj tutaj closures.

