const num = parseFloat(prompt("Ingrese un número"));

if (num % 2 == 0){
    console.log(`Es par`)
    alert(`Es par`);
    if (num>10){
        console.log("Y es mayor que 10")
    } else{
        console.log("Y es menor que 10")
    };
} else{
    alert(`No es par`)
    console.log(`No es par`)
    if (num>10){
        console.log("Y es mayor que 10")
    } else{
        console.log("Y es menor que 10")
    };
};