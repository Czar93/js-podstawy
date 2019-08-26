/*
Nie bój się kodu!
W poniższym kodzie po wysłaniu takiego formularza pobieram wartość pola o id #formAge.
*/

document.addEventListener('DOMContentLoaded', function() {

    //podpinamy się pod wysyłanie formularza
    document.querySelector('#myForm').addEventListener('submit', function(e) {
        //blokujemy wysyłkę formularza
        e.preventDefault();

        //pobieramy wartość pola #formAge
        const age = document.querySelector('#formAge').value;

        //w zmiennej age jest tekst wpisany w formularz.
        //zamień go na liczbę i sprawdź czy po zamianie masz liczbę czy nie liczbę
        //jeżeli liczba jest większa lub równa 18, wypisz w konsoli
        //"wszystko ok", w przeciwnym razie wypisz "niestety, dostęp zablokowany"




    })

});