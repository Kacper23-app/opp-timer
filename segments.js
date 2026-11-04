// BAZA OPP — do uzupełnienia WYŁĄCZNIE zweryfikowanymi lokalizacjami.
// Brak wpisów oznacza, że automatyczne wykrywanie OPP nie działa.
// Każdy kierunek jazdy musi mieć osobny wpis i path w kolejności przejazdu.
// Przykładowy schemat (NIE jest prawdziwym odcinkiem):
// { name:"Nazwa i kierunek", limitKmh:120, distanceMeters:10000,
//   path:[{lat:52.0,lon:21.0},{lat:52.01,lon:21.01}],
//   startRadius:65,endRadius:65,corridorMeters:90 }
window.OPP_SEGMENTS = [];
