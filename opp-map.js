// OPP TIMER 4.1 — PUNKTY ORIENTACYJNE NA MAPIE, NIE SĄ DANYMI DO AKTYWACJI LICZNIKA.
// Współrzędne zaczerpnięte z naodcinku.pl (S2, S8). Początki/końce nie są
// niezależnie potwierdzone jako dokładne lokalizacje bramownic CANARD.
// Linia przerywana łączy punkty w przybliżeniu i NIE odwzorowuje drogi.
(function(){
'use strict';
const items=[
 {name:'S2 — tunel POW, Ursynów–Wilanów',road:'S2',km:'2,52–2,53 km',limit:'80 km/h',a:[52.139989,21.031622],b:[52.150589,21.063258],src:'https://naodcinku.pl/droga-ekspresowa/s2/'},
 {name:'S2 — Warszawa–Wiązowna (rejon Zagórza)',road:'S2',km:'około 10,34 km',limit:'100 km/h (osobowe)',a:[52.155000,21.118639],b:[52.193999,21.248056],src:'https://naodcinku.pl/droga-ekspresowa/s2/'},
 {name:'S8 — Warszawa Łabiszyńska–Marki Szpitalna',road:'S8',km:'około 4,04 km',limit:'120 km/h (osobowe)',a:[52.302528,21.044861],b:[52.307250,21.102694],src:'https://naodcinku.pl/droga-ekspresowa/s8/'},
 {name:'S8 — Mory/Blizne–Bemowo',road:'S8',km:'około 3,08 km',limit:'120 km/h (osobowe)',a:[52.218028,20.867286],b:[52.242264,20.891725],src:'https://naodcinku.pl/droga-ekspresowa/s8/'},
 {name:'S8 — Zielonka–Kobyłka/Wołomin',road:'S8',km:'około 8,11 km',limit:'120 km/h (osobowe)',a:[52.326025,21.153225],b:[52.388464,21.196003],src:'https://naodcinku.pl/droga-ekspresowa/s8/'},
 {name:'S8 — Nowe Grocholice/Wypędy',road:'S8',km:'około 2,27 km',limit:'120 km/h (osobowe)',a:[52.161198,20.905003],b:[52.144361,20.886583],src:'https://naodcinku.pl/droga-ekspresowa/s8/'},
 {name:'S8 — Nadarzyn',road:'S8',km:'około 3,17 km',limit:'120 km/h (osobowe)',a:[52.100667,20.823889],b:[52.082250,20.792722],src:'https://naodcinku.pl/droga-ekspresowa/s8/'}
];
window.OPP_MAP_LOCATIONS=items;
const summary=document.getElementById('mapInfo');
if(summary)summary.textContent='Mapa poglądowa: '+items.length+' rejonów OPP w Warszawie i aglomeracji. Pomarańczowe znaczniki i przerywane linie NIE wskazują dokładnych kamer ani przebiegu jezdni. Licznik GPS dla tych lokalizacji jest wyłączony do czasu weryfikacji.';
const info=document.getElementById('oppMapList');
if(info){info.innerHTML='';for(const item of items){const li=document.createElement('li');li.textContent=item.name+' — '+item.km+'; '+item.limit;info.appendChild(li)}}
if(typeof L==='undefined'||typeof map==='undefined'||!map)return;
const group=L.featureGroup().addTo(map);
for(const item of items){
 const midpoint=[(item.a[0]+item.b[0])/2,(item.a[1]+item.b[1])/2];
 const popup=document.createElement('div');
 const title=document.createElement('strong');title.textContent=item.name;popup.appendChild(title);
 for(const t of ['Orientacyjna lokalizacja — nie jest to dokładny przebieg drogi.','Długość: '+item.km,'Limit według źródła: '+item.limit,'Weryfikacja dokładnych punktów kamer i kierunków: wymagana.']){const p=document.createElement('p');p.textContent=t;p.style.margin='5px 0';popup.appendChild(p)}
 const link=document.createElement('a');link.href=item.src;link.target='_blank';link.rel='noopener noreferrer';link.textContent='Źródło danych';popup.appendChild(link);
 L.circleMarker(midpoint,{radius:10,color:'#fff',weight:2,fillColor:'#f59e0b',fillOpacity:1}).addTo(group).bindPopup(popup);
 L.polyline([item.a,item.b],{color:'#f59e0b',weight:3,dashArray:'4 9',opacity:.75}).addTo(group).bindPopup(popup);
}
// Zachowaj mapę Warszawy na starcie; przycisk pozwala zobaczyć wszystkie punkty.
const btn=document.getElementById('showOpp');if(btn)btn.addEventListener('click',()=>map.fitBounds(group.getBounds().pad(.12)));
})();
