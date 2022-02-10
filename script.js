let inputCelsus = document.querySelector("input.celsus");
let inputFara = document.querySelector("input.farh");


inputCelsus.addEventListener("keyup", convertDegret);

function convertDegret()
    {
       let cellsus = this.value;
       let celsusToFar = (1.8 * cellsus) + 32;

       return inputFara.value = celsusToFar;
    }
