'use strict';

//Dviracio dydzio skaičiavimas pagal ūgį


const skaiciuotiMygtukas = document.querySelector('.remo-skaiciavimas');

const rekomendacijosTekstas = (tekstas) => {
     document.querySelector('.rekomendacija').textContent = tekstas;
};

skaiciuotiMygtukas.addEventListener('click', () => {
     const ugis = Number(document.querySelector('.ugis').value);
     if(ugis >= 148 && ugis <= 152){
          rekomendacijosTekstas('Rekomenduojamas 47-48cm arba XXS dydis');
     } else if(ugis > 152 && ugis <= 160){
          rekomendacijosTekstas('Rekomenduojamas 49-50cm arba XS dydis');
          
     } else if(ugis > 160 && ugis <= 168){
          rekomendacijosTekstas('Rekomenduojamas 51-53cm arba S dydis');
          
     } else if(ugis > 168 && ugis <= 175){
          rekomendacijosTekstas('Rekomenduojamas 54-55cm arba M dydis');
          
     } else if(ugis > 175 && ugis <= 183){
          rekomendacijosTekstas('Rekomenduojamas 56-58cm arba L dydis');
          
     } else if(ugis > 183 && ugis <= 191){
          rekomendacijosTekstas('Rekomenduojamas 58-60cm arba XL dydis');
          
     } else if(ugis >191 && ugis <= 198){
          rekomendacijosTekstas('Rekomenduojamas 61-63 arba XXL dydis');
          
     } else if(ugis > 198 && ugis < 215 ){
          rekomendacijosTekstas('Rekomenduojama matuotis vietoje');
     } else if(ugis <148 && ugis >125 ){
          rekomendacijosTekstas('Rekomenduojama matuotis vietoje');
     }
     else {
          rekomendacijosTekstas('Klaida');
     }
})
