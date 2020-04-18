function stringToArray(str){

const kotak = [];
let temp = []
for(let i = 0; i < str.length; i++){
  
  if(str[i] !== ','){
    temp.push(str[i])
  }else{
    kotak.push(temp)
    temp = []
  }
  
}
kotak.push(temp)
return kotak
}



console.log(stringToArray('aqrst,ukaei,ffooo'))

console.log(stringToArray('qwer,tyui,asdf,ghjk'))