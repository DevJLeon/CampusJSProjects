let matrix = [];
let sortedMatrix =  new Array;

let m = Math.floor(Math.random() * 5)+1;
let n = Math.floor(Math.random() * 5)+1;

// BUILDING THE MATRIX (randomized)

for (let i = 0; i<m; i++){
    matrix[i] = Array(n);
    for (let j = 0;j <n; j++){
        matrix[i][j] = Math.floor(Math.random() * 101);
    };
};

// SORTING ALGORYTHM

let superMat = []; // all the numbers of the matrix will be stored here and then sorted.

for (let k = 0; k<m; k++){
    superMat.push(...matrix[k])
};
console.log(superMat);

superMat.sort((a, b) => a - b); //sorting the supermatrix
console.log(superMat);

for (let i = 0; i<m;i++){ // sorting the snake matrix
    sortedMatrix[i] = Array(n); // creates empty matrix that will be the snake
    let position = sortedMatrix[i];
    for (let j = 0; j<n; j++){
    sortedMatrix[i][j] = superMat.shift();
    }; //add all the items sorted (not snake) to the last matrix 
    if(i %2 != 0){
      position.sort((a, b) => -a + b)
    }; // reversing the 
};
//BODY 
console.log(matrix);
console.log(superMat);
console.log(sortedMatrix)
