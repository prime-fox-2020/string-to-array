let strToArr = (str) => {
    let splitArr = str.split(',');

    let res = [];
    for (let i = 0; i < splitArr.length; i++) {
        let tempArr = [];
        for (let j = 0; j < splitArr[i].length; j++) {
            tempArr.push(splitArr[i][j]);
        }
        res.push(tempArr);
    }
    return res;
}

console.log(strToArr('aqrst,ukaei,ffooo'));
console.log(strToArr('qwer,tyui,asdf,ghjk'));