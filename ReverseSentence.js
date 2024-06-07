let str="welcome to uttara karthik"
console.log(str);
function reverseArray(string){
 let reversedString =string.split(" ").reverse().join(" ");
 return reversedString.split("").reverse().join("");
}
let reversedString =reverseArray(str);
console.log(reversedString);

