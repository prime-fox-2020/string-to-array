function stringToArray(string){
  const arr = []
  string = string.split(',')
  for(let str of string){
    arr.push(str.split(''))
  }
  return arr
}
console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))