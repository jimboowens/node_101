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


////////////////no onto bubble sort
let array = [5,6,4, 543, 234, 75773, 34,3,2,1]

let sorted = false
console.log('sanity check')
let k=0

function bubbleSort (array){
    while (!sorted){
        let placeholder = 0
        let swap = 0
        for (i=0; i<array.length; i++){
            if (i === array.length-k){
                if (swap === 0){
                    sorted = true
                }
                break
            }
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

bubbleSort(array)
console.log(array)