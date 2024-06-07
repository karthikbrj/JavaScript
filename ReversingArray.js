let arrayNumber=[1,2,3,4,5,6];
function reverse(array) {
   let first=0;
   let last=array.length-1;
   while (first<last) {
    [array[first],array[last]]=[array[last],array[first]];
    ++first;
    --last;
   }
   return array;
}
let reverseArray=reverse(arrayNumber);
console.log(reverseArray);

