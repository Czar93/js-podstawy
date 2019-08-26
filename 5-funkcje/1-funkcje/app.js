/*
1)
Napisz funkcję, która przyjmie jeden parametr - dowolny tekst
Funkcja niech ZWRACA tekst "Liczba liter: ...." gdzie .... to liczba liter tekstu.

2)
Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca wynik (sumę)

3)
Napisz funkcję, która przyjmie dowolny tekst
Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:
input -> Ala ma kota
output -> AlA Ma kOtA

4)
Napisz funkcje, która będzie wymagać 2 atrybutów.
Funkcja niech sprawdza, czy oba atrybuty są numerami.
Funkcja ma zwracać iloczyn (*) obu liczb.
Jeżeli któryś z atrybutów nie jest liczba, funkcja niech zwraca false.

5)
Mamy przykładowy tekst:

const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
Włącz/wyłącz kolorowanie składni
Napisz funkcję, która przyjmie 2 atrybuty:
- tekst
- znak rozdziału (np |)

Skorzystaj z odpowiedniej metody String (poszukaj w necie), tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.

input -> "Ania|Marcin|Bartek"
output -> "Ania|Bartek|Marcin"

Wywołaj tę funkcję przekazując do niej str z początku zadania

6)
Wygeneruj pod zmienną "tab" 10-elementową tablicę z losowymi liczbami.
Napisz funkcję getMinFromTab, do której przekażesz powyższą tablicę.
Funkcja powinna zwrócić najmniejszą liczbę z tablicy.
Za pomocą console.log wypisz wartość zwróconą przez funkcję.

7)
Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.

Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter. W przypadku drugiej funkcji do zamiany imion skorzystaj z funkcji z zadania 2.

input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]
*/