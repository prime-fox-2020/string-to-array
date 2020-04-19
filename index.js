let strToArr = (str) => {
    let splitArr = str.split(',');

    let temp1 = [];
    for (let i = 0; i < splitArr.length; i++) {
        let temp2 = [];
        for (let j = 0; j < splitArr[i].length; j++) {
            temp2.push(splitArr[i][j]);
        }
        temp1.push(temp2);
    }
    return temp1;
}

console.log(strToArr('aqrst,ukaei,ffooo'));
console.log(strToArr('qwer,tyui,asdf,ghjk'));