

function stringToArray(data){
    let temp = [];
    let tampung =''
    for (let i = 0; i < data.length; i++) {
        if(data[i]==','){
            temp.push(tampung)
            tampung =''
        }else{
            tampung += data[i]
        }
    }
    temp.push(tampung)

    let hasil =[];

    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++) {
            if(hasil[i]==undefined){
                hasil[i]=[];
                hasil[i].push(temp[i][j])
            }else{
                hasil[i].push(temp[i][j])
            }
        }
    }
    return hasil
}


console.log(stringToArray('asd,ddd,eee'))
console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
