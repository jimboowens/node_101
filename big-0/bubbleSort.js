// // bubblesort
// let counter = 0
// let found = false
// function binarySearch(list, value){
//     // we shall set a range, or bound, to check. This will get smaller as we guess.
//     let bottom = 0
//     let top = list.length-1
//     let middle = Math.floor((top+bottom)/2)
//     // console.log(bottom, middle, top)
//     while(!found){
//         if (value<list[middle]){
//             top = middle - 1
//         }else if (value >list[middle]){
//             bottom = middle+1
//         }else{
//             console.log(`found! Secret number was ${value} and it took ${counter} tries`)
//             found = true
//         }
//         middle = Math.floor((top+bottom)/2)
//         counter++
//     }
// }




//     let numbers = []
//     for (let i=0;i<3089089;i++){
//         numbers.push(i)
//     }
    

// let number = Math.ceil(numbers.length*Math.random())
// console.log (number)
// binarySearch(numbers,number)


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
        let cardHolder = object[rand1]
        object[rand1]=object[rand2]
        object[rand2]= cardHolder 
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