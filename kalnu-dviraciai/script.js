'use strict';

//Dviracio dydzio skaičiavimas pagal ūgį


const skaiciuotiMygtukas = document.querySelector('.remo-skaiciavimas');

const rekomendacijosTekstas = (tekstas) => {
     document.querySelector('.rekomendacija').textContent = tekstas;
};

skaiciuotiMygtukas.addEventListener('click', () => {
     const ugis = Number(document.querySelector('.ugis').value);
     if(ugis >= 148 && ugis <= 158){
          rekomendacijosTekstas('Rekomenduojamas 13-14in arba XS dydis');
     } else if(ugis > 158 && ugis <= 168){
          rekomendacijosTekstas('Rekomenduojamas 15-16in arba S dydis');
          
     } else if(ugis > 168 && ugis <= 178){
          rekomendacijosTekstas('Rekomenduojamas 17-18in arba M dydis');
          
     } else if(ugis > 178 && ugis <= 185){
          rekomendacijosTekstas('Rekomenduojamas 19-20in arba L dydis');
          
     } else if(ugis > 185 && ugis <= 193){
          rekomendacijosTekstas('Rekomenduojamas 21-22 arba XL dydis');
                  
     } else if(ugis > 198 && ugis < 215 ){
          rekomendacijosTekstas('Rekomenduojama matuotis vietoje');
     } else if(ugis <148 && ugis >125 ){
          rekomendacijosTekstas('Rekomenduojama matuotis vietoje');
     }
     else {
          rekomendacijosTekstas('Klaida');
     }
})
