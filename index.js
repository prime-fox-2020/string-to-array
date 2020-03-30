function stringToArray(string) {
    let res = []
    let newStr = string.split(',')

    for(let i = 0; i < newStr.length; i++) {
        let temp = []
        for(let j = 0; j < newStr[i].length; j++) {
            temp.push(newStr[i][j])
        }
        res.push(temp)
    }
    return res
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))