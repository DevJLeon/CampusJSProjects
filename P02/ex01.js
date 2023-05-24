let nota1 = parseFloat(prompt("Ingrese la nota1 :"));
let nota2 = parseFloat(prompt("Ingrese la nota2 :"));
let nota3 = parseFloat(prompt("Ingrese la nota3 :"));

const promed = (nota1+nota2+nota3)/3;

if (promed <= 3.9){
    alert(`Su promedio fue ${promed}. Estudie más`)
} else{
    alert(`Felicidades. Usted ha sido becado :)`)
};
