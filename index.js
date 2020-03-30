function nestedArr(string){
    let result = []
    let temp = []

    for(let i=0; i<string.length; i++){
       if(string[i] === ',') {
           result.push(temp)
           temp = []
       } else {
           temp.push(string[i])
       }
    }
    result.push(temp)
    return result
}
console.log(nestedArr('aqrst,ukaei,ffooo'))
/**
 * [['a', 'q', 'r', 's', 't']
 *  ['u', 'k', 'a', 'e', 'i']
 *  ['f', 'f', 'o', 'o', 'o']]
 */
console.log(nestedArr('qwe,tyui,asdf,ghjk'))
console.log(nestedArr('akmalia'))