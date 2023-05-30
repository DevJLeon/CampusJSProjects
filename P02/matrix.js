
let matrix = [];
let sortedMatrix =  new Array;

let m = 3;
let n = Math.floor(Math.random() * 5);

// BUILDING THE MATRIX (randomized)

/*
const buildMat = (m=3,n=Math.floor(Math.random() * 10)) =>{
    for (let i = 0; i<m; i++){
        matrix[i] = Array(n);
        for (let j = 0;j <n; j++){
            matrix[i][j] = Math.floor(Math.random() * 10);
        };
    };
    return m,n;
};
*/

for (let i = 0; i<m; i++){
    matrix[i] = Array(n);
    for (let j = 0;j <n; j++){
        matrix[i][j] = Math.floor(Math.random() * 10);
    };
};

// SORTING ALGORYTHM

let superMat = [];

for (let k = 0; k<m; k++){
    superMat.push(...matrix[k])
};

superMat.sort((a, b) => a - b); //sorting the supermatrix

for (let i = 0; i<m;i++){
    sortedMatrix[i] = Array(n);
    if (i%2 == 0){
        for (let x = 0; x<n; x++){
            for (let j = 0;j <n; j++){
                
                sortedMatrix[i][j] ;
            };
        };
    };
};


//BODY
sortedMatrix.splice(0[0],0[0],"hola") 
console.log(sortedMatrix)
console.log(matrix);
console.log(superMat);