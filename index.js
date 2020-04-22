function strToArr(str){
    let arr = []
    let subArr = []
    for (let i = 0; i < str.length; i++) {
        if(str[i] === ','){
            arr.push(subArr)
            subArr = []
        }else{
            subArr.push(str[i])
        }
    }
    arr.push(subArr)
    return arr
}

console.log(strToArr('qwe,rty,uio'))
console.log(strToArr('asdf,fgjj,zxvc'))