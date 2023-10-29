// function countZeroes(arr) {    //my first solution which is O(n) so this
//does NOT work, having trouble wrapping my head around this. 

//   let zeroCount = 0;
//   for(zero of arr){
//     console.log(zero)
//     if(zero === 0){
//         zeroCount += 1;
//     }
//   }
  
//   return zeroCount;
// }

function countZeroes(arr) {
  
    let oneCount = arr.reduce((acc,curr) => {
        if(curr === 1){
            console.log('CURR')
            return acc++;
        }
    }, 0);
    return arr.length =  oneCount;
}
    



countZeroes([1,1,1,1,0,0])


//Springboard's Solution:

// function countZeroes(arr) {
//     // add whatever parameters you deem necessary - good luck!
//     let firstZero = findFirst(arr)
//     if (firstZero === -1) return 0;
  
//     return arr.length - firstZero
//   }
  
//   //helper function - finds i of first 0 in array - binary search algorithm
//   function findFirst(arr, low = 0, high = arr.length - 1) {
//     if (high >= low) {
//       let mid = low + Math.floor((high - low) / 2)
   
//       if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
        
//         return mid;
//       } else if (arr[mid] === 1) {
//         return findFirst(arr, mid + 1, high)
//       }
//       return findFirst(arr, low, mid - 1)
//     }
//     return -1;       //if no zeroes return -1
//   }




//   findFirst([1,1,1,1,0,0])







module.exports = countZeroes