let alien={
    name:"karthik",
    tech:"java script",
    laptop :{
        name:'hp',
        cpu:7,
        cost:200000,
    }
}
// console.log(alien);
// console.log(alien.name);
// console.log(alien['name']);
// console.log(alien['tech']);
// for (const key in alien) {
//         console.log(key,alien[key]);
//     }
for (let key in this.laptop) {
    if (this.laptop.hasOwnProperty(key)) {
      console.log('laptop.' + key + ': ' + laptop[key]);
    }
  }