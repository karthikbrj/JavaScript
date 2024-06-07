let number=20;
let str="fizz";
let str1="buzz";
let str2="fizzbuzz";
function print(number,a,b,c){
for (let i = 1; i <= number; i++) {
    if(i%3===0 && i%5===0){
        console.log(c);
    }
    if(i%3===0){
        console.log(a);
    }
    else if(i%5===0){
        console.log(b);
    }
    else{
        console.log(i);
    }
    
}
}
print(number,str,str1,str2)

