let fruits = ["apple", "mango","apple", "orange", "mango", "mango"];
function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}
let uniqueItems=removeDuplicates(fruits);
console.log(uniqueItems);

