
function stringToArr(string){

    let result = []
    let temp = ''
    for (let a= 0; a<string.length; a++){
        if(string[a] === ','){
            result.push(temp)
            temp = ''
        } else {
            temp += string[a]
        }
        if (a === string.length-1){
            result.push(temp)
        }
    }
    // console.log(result)
    
    let resultB = []
    for (let b= 0; b<result.length; b++){
        let resultC = []
        for (let c = 0; c<result[b].length; c++){
            resultC.push(result[b][c])
        }
        resultB.push(resultC)
    }

    return resultB
}    

let words = 'aqrst,ukaei,ffooo'
console.log(stringToArr(words))

