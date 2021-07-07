function stringtoArray(string) {
    let splittedString = string.split(',')
    let answer = []

    for (let i = 0; i < splittedString.length; i++) {
        let temp = splittedString[i].split('')
        answer.push(temp)
    }
    return answer
}

console.log(stringtoArray('aqrst,ukaei,ffooo'))
console.log(stringtoArray('qwer,tyui,asdf,ghjk'))
