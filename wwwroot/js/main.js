// Variabler
const deg = 6;
// Variabler från HTML-element
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

// Skapa nytt date-objekt och lagra i variabel
let day = new Date();

// Deklarera variabler och ge värde utifrån klockans tid
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

// Applicera style till elementen (tidvisarna) utifrån tidens timme/minut/sekund
hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;