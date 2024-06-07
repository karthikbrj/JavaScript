let groups = [
 ["Martin", "Daniel", "Keith"],
 ["Margot", "Marina", "Ali"],
 ["Helen", "Jonah", "Sambikos"],
];
let letter='M';
 function matchingLetter(array,key) {
    for(let i=0;i<groups.length;i++){
        let letterCount=0;
        for(let j=0;j<groups[i].length;j++){
            if(groups[i][j].startsWith(key)){
                letterCount++;
            }else{
                continue;
            }
            if(letterCount==2){
               return groups[i];
                break;
            }
        }
    }
}
let matching=matchingLetter(groups,letter);
console.log(matching);

