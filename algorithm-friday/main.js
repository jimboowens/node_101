
// let size = 20
// size+=1
// let array = []


// // function to create board and player arrays based on grid size!
// function makeArray(size) {
//     let matrix = []
//     // to populate the top array with 1's

//     // for the remaining spots
//     for (i = 0; i < size; i++) {
//         let row = [1]
//         array.push(row)
//         for (j=1;j<size;j++){
//             array[i].push(1)
//         }
        
//     }
//     // console.log(array)
//     return array
// }
// makeArray(size)
// // console.log(array)
// function createBoard(size) {
//     for (let i = 1; i < size; i++) {
//         let row = []
//         for (let j = 1; j < size; j++) {
//             let rowInRow=[1]
//             if(array[i-1]){
//                 if(array[i][j-1]){
//                     array[i][j]= array[i-1][j]+array[i][j-1]
//                 } else {array[i][j-1] = 1}
//             } else{array[i-1]=1} 
//         }
//         // console.log(`the solution for ${size-1} is ${array[size-1][size-1]}`)
//     }
//     console.log(`the solution for ${size-1} is ${array[size-1][size-1]}`)
// }
// createBoard(size)
// console.log(`the solution for ${size-1} is ${array[size-1][size-1]}`)
// array.forEach(row => console.log(row));

// one super elegant solution that's basically the N!/R!(N-R)!
// const grid = 20;
// var path = 1;

// for (i = 0; i < grid; i++) {
//   path *= (2* grid) - i;
//   path /= i + 1;
// }

// console.log(path)

// one basically like mine, but much more elegant
// let numRows = 10;
// let numCols = 10;
// let matrix = [];
// for (let row = 0; row < numRows; row++){
//   matrix.push([]);
//   for(let cell = 0; cell < numCols; cell++){
//     if (row === 0 || cell === 0){
//       matrix[row][cell] = 1;
//     } else {
//       matrix[row][cell] = matrix[row-1][cell] + matrix[row][cell-1];
//     }
//   }
// }
// matrix.forEach(row => console.log(row));
// console.log(`The number of paths is ${matrix[numRows-1][numCols-1]}`);

let highestPalendrome = 0
let factor1
let factor2
for (let i=999;i>100;i--){
    for (let j=i;j>100;j--){
        let product = i*j
        let productStr = product.toString()
        if (productStr === reverseStr(productStr)){
            if(product >highestPalendrome){
                highestPalendrome = product
                factor1 = i
                factor2 = j
            }
        }
    }
}
function reverseStr (arg){
    let arr = arg.split('')
    let reversed=arr.reverse()
    return reversed.join('')
}
console.log(highestPalendrome)
console.log(factor1, factor2)