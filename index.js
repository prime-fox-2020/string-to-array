let changeToArray = (str) => {
    let array = str.split(",")
    let newArr=[],temp=[]

    for(let i=0;i<array.length;i++){
        temp=[]
        for(let j=0;j<array[i].length;j++){
            temp.push(array[i][j])
        }
        newArr.push(temp)
    }
    return newArr
}

let str = 'aqrst,ukaei,ffooo'
console.log(changeToArray(str))