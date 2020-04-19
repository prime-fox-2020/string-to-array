function stringToArr(str){
    let newArr = []
    let tempArr =[]
    for (let i = 0; i < str.length; i++) {
        if(i == str.length -1){
            tempArr.push(str[i])
            newArr.push(tempArr)
            tempArr = []
        }else if(str[i] == ","){
            newArr.push(tempArr)
            tempArr = []
        }else if(str[i] != ","){
            tempArr.push(str[i])
        }
    }
    return newArr
}

console.log(stringToArr("aqrst,ukaei,ffooo"));
console.log(stringToArr("qwer,tyui,asdf,ghjk"));