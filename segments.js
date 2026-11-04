// Baza odcinków OPP. Na start pozostawiamy ją pustą, aby nie podawać niezweryfikowanych lokalizacji.
// Każdy odcinek wymaga dokładnej ścieżki GPS od początku do końca, w kolejności przejazdu.
// Przykładowa struktura (współrzędne poniżej są wyłącznie atrapami, NIE są prawdziwym OPP):
// window.OPP_SEGMENTS = [{
//   id: "przykladowy-odcinek",
//   name: "Nazwa odcinka – kierunek",
//   startRadius: 100,
//   endRadius: 100,
//   path: [{lat: 52.0000, lon: 21.0000}, {lat: 52.0010, lon: 21.0020}]
// }];
window.OPP_SEGMENTS = [];