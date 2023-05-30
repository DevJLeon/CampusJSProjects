const numeros = ["Alejandra", "alejandra","Zorman", "Juan", "Maria", "juan", "Maria"];

numeros.sort ((a, b) =>
a.toLowerCase() > b.toLowerCase() ? 1 :
a.toLowerCase() < b.toLowerCase() ? -1:
0
);

console.log(numeros);

const data = [ "Zaragoza", "madrid", "Barcelona" ];
data.sort ((a, b) =>
a.toLowerCase() > b.toLowerCase() ? 1 :
a.toLowerCase() < b.toLowerCase() ? -1:
0
);
console.log (data);

/*--------------------------------------------------------------------------------------------------*/

const dataa = [
    {equipo: "C", puntos: 10, goles: 15},
    {equipo: "B", puntos: 10, goles: 17},
    {equipo: "A", puntos: 12, goles: 18}
  ];
  dataa.sort ((a, b) =>
    a.puntos > b.puntos ? -1 :
      a.puntos < b.puntos ? 1:
        a.goles > b.goles ? -1 :
          a.goles < b.goles ? 1 :
            0
  );
  console.log (dataa);
