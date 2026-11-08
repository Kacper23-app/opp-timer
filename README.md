# OPP TIMER 4.0 — Warszawa

OPP TIMER to rozwijany prototyp aplikacji drogowej na telefon z Androidem. Wersja 4.0 udostępnia mapę Warszawy, lokalizację GPS oraz interfejs licznika minimalnego czasu przejazdu przez odcinkowy pomiar prędkości (OPP).

## Funkcje

- Interaktywna mapa Warszawy (OpenStreetMap; wymaga internetu).
- Wyświetlanie pozycji użytkownika po udzieleniu zgody na lokalizację.
- Przygotowanie licznika przez użytkownika przed wykrytym odcinkiem OPP (po dodaniu zweryfikowanych danych odcinka).
- Licznik minimalnego czasu przejazdu, średniej prędkości od wjazdu i limitu prędkości.
- Tryb demonstracyjny do testowania bez jazdy.

## Stan projektu i ograniczenia

**To nadal prototyp, a nie gotowa nawigacja drogowa.** Baza zweryfikowanych odcinków OPP jest obecnie pusta. Aplikacja nie potrafi jeszcze niezawodnie wykrywać rzeczywistych OPP w Warszawie. Dane demonstracyjne są fikcyjne.

GPS w przeglądarce może przestać działać po zablokowaniu ekranu lub przełączeniu aplikacji w tło. Wyniki GPS i obliczenia mogą być niedokładne. Upływ minimalnego czasu przejazdu nie oznacza końca OPP ani gwarancji uniknięcia mandatu. Należy zawsze przestrzegać obowiązujących ograniczeń prędkości i nie obsługiwać telefonu podczas prowadzenia.

## Uruchomienie

Aplikacja jest publikowana przez GitHub Pages:

https://kacper23-app.github.io/opp-timer/

W Chrome na telefonie można otworzyć adres z parametrem wersji, np. `?v=4`, jeśli przeglądarka pokazuje starszą stronę. Sama zmiana parametru nie zawsze usuwa stare pliki z pamięci podręcznej.

## Aktualizacja przez GitHub (telefon Samsung)

1. Pobierz i rozpakuj paczkę OPP TIMER 4.0.
2. Otwórz repozytorium `opp-timer` na GitHubie.
3. Umieść pliki `index.html`, `segments.js`, `manifest.webmanifest` i `sw.js` bezpośrednio w głównym katalogu repozytorium, zastępując starsze wersje.
4. Dodaj również ten plik jako `README.md` (opcjonalnie, ale zalecane).
5. Zatwierdź zmiany przyciskiem **Commit changes**.
6. Poczekaj na publikację GitHub Pages i otwórz stronę ponownie.

## Pliki projektu

- `index.html` — interfejs i logika aplikacji.
- `segments.js` — baza odcinków OPP (obecnie bez zweryfikowanych wpisów).
- `manifest.webmanifest` — ustawienia aplikacji internetowej.
- `sw.js` — obsługa pamięci podręcznej aplikacji.
- `README.md` — opis projektu i instrukcja.

## Kolejne etapy

Weryfikacja współrzędnych, kierunków, długości i limitów OPP w Warszawie; testy GPS na rzeczywistych trasach; udoskonalenie działania przy wygaszonym ekranie (docelowo aplikacja natywna Android).
