let arr=[1,3,4,2,6,9,5];
arr.sort()
console.log(arr);
elements=3;
function kthLargestelements(array,elements) {
  return  array.splice(arr.length-elements,arr.length)
}
let large=kthLargestelements(arr,elements);
console.log(large);
function kthSmallestelements(array,elements) {
    return  array.splice(0,elements)
  }
  let small=kthSmallestelements(arr,elements);
  console.log(small);