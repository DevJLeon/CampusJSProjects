let a = [1,2,3,4,5], b = [7,7,7,7,7];

a.forEach( v => b[v-1] += -v);
a.forEach( v => console.log(`hola ${-v}`))
console.log("aaa",a);
console.log("be",b);

console.log("************************************************");
console.log("************************************************");

const asteriscos = () =>{
    console.log("************************************************");
    console.log("************************************************");
};

const pregunta = (question) =>{
    if(confirm(question)) alert("sikas");
    else alert("nokas");
};

pregunta();
console.log("hOLA")
asteriscos();
