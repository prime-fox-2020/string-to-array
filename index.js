function stringToArray(kata){
    var res=[]
    var simpan=[]
    for (let i = 0; i < kata.length; i++) {
        if(kata[i]!==','){
            simpan.push(kata[i])
        }else if(kata[i]=','){
            res.push(simpan)
            simpan=[]
        }
    }
    res.push(simpan)
    return res
}

console.log(stringToArray('asdsaw,qdwewe,qwewd'))
console.log(stringToArray('hola,hello,ola'))