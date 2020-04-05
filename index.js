function stringToArray(str) {
    var temp = []
    var result = []
    for(var i = 0; i < str.length; i++){
        if(str[i] === ','){
            result.push(temp)
            temp = []
        } else {
            temp.push(str[i])
        }
    }
    result.push(temp)
    return result
}

console.log(stringToArray("aqrst,ukaei,ffooo"));
console.log(stringToArray("qwer,tyui,asdf,ghjk"));