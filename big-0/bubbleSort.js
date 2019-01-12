////////////////now onto bubble sort
const freshArray = createObject(10000)
shuffleObject(freshArray, freshArray.length)
let sorted = false
let k=0

function createObject(length){
    let newObject = []
    for (i=0;i<length;i++){
        newObject.push(i)
    }
    return newObject
}
function shuffleObject(object, length) {
    for (let i=0; i<length*10; i++){
        let rand1 = Math.floor(Math.random()*length)
        let rand2 = Math.floor(Math.random()*length)
        let placeHolder = object[rand1]
        object[rand1]=object[rand2]
        object[rand2]= placeHolder 
    }
}

function checkSort(counterOfSwaps, numberOfIterations, lengthOfArray){
    if (numberOfIterations === lengthOfArray-1){
        if (counterOfSwaps === 0){
            sorted = true
        }
    }
}

function bubbleSort (array){
   while (!sorted){
       let placeholder = 0
       let swap = 0
       let numUnsorted = array.length-k
       for (i=0; i<numUnsorted; i++){
            checkSort(swap, i, numUnsorted)
           if (array[i]>array[i+1]){
               placeholder = array[i]
               array[i] = array[i+1]
               array[i+1]= placeholder
               swap++
           }
       }
       k++
   }
}

bubbleSort(freshArray)