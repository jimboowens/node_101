
let size = 3
let array = []


// function to create board and player arrays based on grid size!
function makeArray(size) {
    let matrix = []
    // to populate the top array with 1's

    // for the remaining spots
    for (i = 0; i < size; i++) {
        let row = [1]
        array.push(row)
        for (j=1;j<size;j++){
            array[i].push(1)
            
        }
        
    }
    
    console.log(array)
    return array
}
makeArray(size)
// console.log(array)
function createBoard(size) {
    for (let i = 1; i < size; i++) {
        let row = []
        for (let j = 1; j < size; j++) {
            let rowInRow=[1]
            if(array[i-1]){
                if(array[i][j-1]){
                    array[i][j]= array[i-1][j]+array[i][1]
                } else {
                    array[i][j-1] = 1
                }
            } else{
                array[i-1]=1
            } 
            console.log(`array is ${array[size-1][size-1]}`)
        }
        for (let j = 2; j < size; j++) {
            let rowInRow=[1]
            array[i][j]= array[i-1][j]+array[i][j-1]
        }
    }
}
createBoard(size)
