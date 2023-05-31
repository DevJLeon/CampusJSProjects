
let matrix = [];
let sortedMatrix =  new Array;

let m = 3;
let n = 4//Math.floor(Math.random() * 5);

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
        matrix[i][j] = Math.floor(Math.random() * 101);
    };
};

// SORTING ALGORYTHM

let superMat = [];

for (let k = 0; k<m; k++){
    superMat.push(...matrix[k])
};
console.log(superMat);

superMat.sort((a, b) => a - b); //sorting the supermatrix



for (let i = 0; i<m;i++){
    sortedMatrix[i] = Array(n); // creates empty matrix
    if (i%2 == 0){
        for (let x = 0; x<n; x++){ //add numbers to even rows
            for (let j = 0;j <n; j++){
              console.log(i)
                sortedMatrix[i][j] = superMat.shift();
                
            };
        };
    };
};

//BODY 
console.log(matrix);
console.log(superMat);
console.log(sortedMatrix)
sortedMatrix[0][0] = superMat.shift();
sortedMatrix[0][1] = superMat.shift();
sortedMatrix[0][2] = superMat.shift();
sortedMatrix[0][3] = superMat.shift();
console.log(sortedMatrix)