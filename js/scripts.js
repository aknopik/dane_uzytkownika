'use strict';
const form = document.querySelector('form');
form.addEventListener('submit',function(event) 
   {
    event.preventDefault();
    var imie = document.getElementsByTagName('input')[0];
    var nazwisko = document.getElementsByTagName('input')[1];
    var result = document.querySelector('.result');
    result.innerHTML = `Twoje imię to: <b>${imie.value}</b><br> 
    Twoje nazwisko to: <b>${nazwisko.value}</b>`;
    imie.value = '';
    nazwisko.value = '';
  }
  );