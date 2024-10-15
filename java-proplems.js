

let array = [1,2,3,4,5,6,7,8,9,10];

const filteredNums = (arrayy) => {
   return arrayy.filter( num => num % 2 == 0 );  // here we used filter not find cuz find will return the first element that matches the condition while filter will return a whole array with the matching elements ,  map is a method that will return the same array or any thing you pass to it but in a different form or mith different logic
} 

console.log(filteredNums(array))


/////////////////////////////////////////////////////////////////////////////////


let array2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

let largestNum = (arrayyy) => {
      // return  Math.max(...arrayyy)
    let largest = arrayyy[0];
    for (let i = 1 ; i < arrayyy.length ; ++i ) {  // we will make the i less than the array2.length with one cuz we will use the i as index below and i should be intialization = 1 cuz we assumed that 0 is the largest above and we will compare
         if( arrayyy[i] > largest ){
            largest = arrayyy[i]
         }
    }
    return largest;
}

console.log(largestNum(array2))



/////////////////////////////////////////////////////////////////////////////////



let array3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

let reversedString = (arrayyyy) => {
           return arrayyyy.reverse()                           //  Using split('') to split the string into characters : Original String "Hello" then Resulting Array ['H', 'e', 'l', 'l', 'o'] , split and join will be used if the array that we want to reverse is string not number
}

console.log(reversedString(array3))



/////////////////////////////////////////////////////////////////////////////////


let array4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2, 3, 4, 10]

let removeDuplicates = (arrayyyy) => {
      return [ ...new Set(arrayyyy) ] // new Set(arrayyyy) creates a Set with unique elements (no dublicates) from the array (arrayyyy) , The spread operator (...) takes all elements from the Set and spreads them into a new array cuz here in new set(arrayyyy) the numbers only stored as {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11} not in array so ... operator extract it to array to be like this [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
}
   console.log(removeDuplicates(array4))

