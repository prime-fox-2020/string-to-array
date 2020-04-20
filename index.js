function stringToArray(string) {
  let result = []
  let temp = []
  
  for(let i = 0; i < string.length; i++){
    if(string[i] == ','){
      result.push(temp)
      temp = []
    }
    else if(i == string.length-1){
      temp.push(string[i])
      result.push(temp)
    }
    else{
      temp.push(string[i])
    }
  }
  return result
}

console.log(stringToArray("aqrst,ukaei,ffooo"))
console.log(stringToArray("qwer,tyui,asdf,ghjk"))