
// function reverse_a_number(num) {
//     let reversed_num = 0;
//     while (num !== 0) {
//         let rem=num % 10;
//       reversed_num = reversed_num * 10 + rem;
//       num = Math.floor(num / 10);
//     }
//     return reversed_num;
//   }
//   const num = 12345;
//   console.log("Original number: "+num);
//   const result = reverse_a_number(num);
//   console.log("Reversed number: "+result);
  let num=12345;
  let reverse=0;
  while(num!==0){
    let rem=num%10;
    reverse=reverse*10+rem;
    num = parseInt(num / 10);
  }
  console.log(reverse);