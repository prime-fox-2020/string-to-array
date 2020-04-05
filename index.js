function strtoArr(str){
    var count = 0
    var res = []
    var temp =[] 
    //looping str
    for(var i = 0 ; i <str.length;i++){
        count++    
        if(str[i] == ','){
            res.push(temp)
            temp = []
        }else if(count == str.length){
            temp.push(str[i])
            res.push(temp)
            temp = []
        }else{
            temp.push(str[i])
        }
    }
    return res
}   

console.log(strtoArr('abcd,efgh,jklm'))
