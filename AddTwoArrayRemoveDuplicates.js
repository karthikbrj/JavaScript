let arr1 = [1, 2, 3, 4, 5, 6] 
let arr2 = [3, 4, 5, 7];
let arr3=arr1.concat(arr2);
console.log(arr3);
function removeDuplicates(array) {
    return [...new Set(array)];
}
let uniqueArray=removeDuplicates(arr3);
console.log(uniqueArray);