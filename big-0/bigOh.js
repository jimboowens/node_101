// console.log ("sanity check")

// // guess a number 
// // - loop through all
// let numberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// let randNumber = Math.ceil(numberList.length*Math.random())
// console.log (`randnumber is ${randNumber}`)

// // for (let i=0; i<=numberList.length; i++){
// //     if (numberList[i]===randNumber){
// //         console.log('found!', randNumber)
// //         console.log (`it took ${i+1} guesses to get the answer`)
// //     }
// // }

// let found = false
// let counter = 0
// // while (found === false){
// //     counter ++
// //     let randIndex = Math.floor(numberList.length*Math.random())
// //     if (numberList[randIndex-1] == randNumber){
// //         found= true
// //         if (counter === 1){
// //             console.log (`Found! it took ${counter} guess to get ${randNumber}`) 
// //         }else{
// //         console.log (`Found! it took ${counter} guesses to get ${randNumber}`)
// //         }
// //     }
// // }
// // let counter = 0
let counter = 0
let found = false
function binarySearch(list, value){
    // we shall set a range, or bound, to check. This will get smaller as we guess.
    let bottom = 0
    let top = list.length-1
    let middle = Math.floor((top+bottom)/2)
    // console.log(bottom, middle, top)
    while(!found){
        if (value<list[middle]){
            top = middle - 1
        }else if (value >list[middle]){
            bottom = middle+1
        }else{
            console.log(`found! Secret number was ${value} and it took ${counter} tries`)
            found = true
        }
        middle = Math.floor((top+bottom)/2)
        counter++
    }
}




    let numbers = []
    for (let i=0;i<308009089;i++){
        numbers.push(i)
    }
    

let number = Math.ceil(numbers.length*Math.random())
console.log (number)
binarySearch(numbers,number)