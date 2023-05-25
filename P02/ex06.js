// Construir el altoritmo en JS para un programa para cualquier cantidad de estudiantes que lea el nombre, sexo y la nota definitiva y halle al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y  cuantos mujeres.

const cantEst = parseInt(prompt("Ingrese la cantidad de alumnos (TOTAL)"));
let contMuj = 0, contHom = 0, estudiantes = [];

for (let estudiante = 0; estudiante<cantEst; estudiante ++){
    let nom = prompt(`Ingrese el nombre del ${estudiante+1} estudiante.`)
    let gen = prompt(`Ingrese el sexo. M(masculino) F(Femenino)`);
    let def = parseFloat(prompt(`Ingrese la nota definitiva.`));
    if (gen == "M"){
        contHom ++;
    } else if (gen == "F"){
        contMuj ++;
    };
    estudiantes.push({
        nombre : nom,
        genero : gen,
        nota : def
    });
};

let mayor = estudiantes[0];

for (let id = 0; id<cantEst; id ++){
    if (estudiantes[id].nota > mayor.nota){
        mayor = estudiantes[id]
    };
};

alert(`Hay ${contMuj} mujeres y ${contHom} hombres. El estudiante con la mayor nota es ${mayor.nombre}, con ${mayor.nota}.`);

console.log(mayor);
console.log(estudiantes);
console.log(`Mujeres: ${contMuj}, hombres : ${contHom}`);