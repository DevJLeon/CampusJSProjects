const res = parseFloat(prompt("Ingrese la resistencia"));
const int = parseFloat(prompt("Ingrese la intensidad"));

const volt = res*int;

alert(`El voltaje es ${volt}`);