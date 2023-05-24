const p1 = {
    name : prompt("Ingrese el nombre de la primera persona"),
    age : parseInt(prompt("Ingrese la edad de la primera persona"))
}

const p2 = {
    name : prompt("Ingrese el nombre de la segunda persona"),
    age : parseInt(prompt("Ingrese la edad de la segunda persona"))
}

const p3 = {
    name : prompt("Ingrese el nombre de la tercera persona"),
    age : parseInt(prompt("Ingrese la edad de la tercera persona"))
}

let mayor = p1;

if (p2.age>p1.age){
    mayor = p2;
};

if(p3.age>mayor.age){
    mayor = p3;
}

alert(`El usuario mayor es ${mayor.name} con ${mayor.age} años.`)