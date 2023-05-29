// Elabora un programa que muestre la enesima potencia de varios números dados por el usuario El proceso termina cuando la base leida sea 0.

let expo, resul;

const potencia = function () {
  if (expo != 0){
    while(expo != 0){
      let numb = parseInt(prompt("Ingrese el número."));
      expo = parseInt(prompt("Ingrese el exponente."));
      let resul = numb**expo;
      if (expo === 0){
        break;
      }
      alert(resul);
    };
  };
};
potencia();

alert("Fin del programa");