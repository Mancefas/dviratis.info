'use strict';

//Dviracio dydzio skaičiavimas pagal ūgį


const skaiciuotiMygtukas = document.querySelector('.remo-skaiciavimas');
const rekomenduojama = document.querySelector('.rekomendacija');

skaiciuotiMygtukas.addEventListener('click', () => {
     const ugis = Number(document.querySelector('.ugis').value);
     if(ugis >= 148 && ugis <= 152){
          rekomenduojama.textContent = 'Rekomenduojamas 47-48cm arba XXS dydis';
          console.log('xxs')
     } else if(ugis > 152 && ugis <= 160){
          rekomenduojama.textContent = 'Rekomenduojamas 49-50cm arba XS dydis';
          console.log('xs')
     } else if(ugis > 160 && ugis <= 168){
          rekomenduojama.textContent = 'Rekomenduojamas 51-53cm arba S dydis';
          console.log('s')
     } else if(ugis > 168 && ugis <= 175){
          rekomenduojama.textContent = 'Rekomenduojamas 54-55cm arba M dydis';
          console.log('m')
     } else if(ugis > 175 && ugis <= 183){
          rekomenduojama.textContent = 'Rekomenduojamas 56-58cm arba L dydis';
          console.log('l')
     } else if(ugis > 183 && ugis <= 191){
          rekomenduojama.textContent = 'Rekomenduojamas <b>58-60cm</b> arba <b>XL</b> dydis';
          console.log('xl')
     } else if(ugis >191 && ugis <= 198){
          rekomenduojama.textContent = 'Rekomenduojamas 61-63 arba XXL dydis';
          console.log('xxl')
     } else if(ugis > 198 && ugis < 215 ){
          rekomenduojama.textContent = 'Rekomenduojama matuotis vietoje';
     } else if(ugis <148 && ugis >125 ){
          rekomenduojama.textContent = 'Rekomenduojama matuotis vietoje';
     }
     else {
          rekomenduojama.textContent = 'Klaida';
     }
})
