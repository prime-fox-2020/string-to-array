function stringToArray(str){
    let result = []
    let temp = []
    for(let i = 0; i < str.length; i++){
        if(str[i] == ','){
            result.push(temp)
            temp = []
        }
        else if(i == str.length-1){
            temp.push(str[i])
            result.push(temp)
        }
        else{
            temp.push(str[i])
        }
    }
    return result
}

console.log(stringToArray("aqrst,ukaei,ffooo"))
console.log(stringToArray("qwer,tyui,asdf,ghjk"))