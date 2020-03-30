function strToArr(str) {
    str = str.split(',')
    // console.log(str);
    let hasil = []
    for (let i = 0; i < str.length; i++) {
        let row = []
        for (let j = 0; j < str[i].length; j++) {
            row.push(str[i][j]);
        }
        hasil.push(row)
    }
    return hasil
}

console.log(strToArr("aqrst,ukaei,ffooo"));
console.log("\n");
console.log(strToArr("qwer,tyui,asdf,ghjk"));