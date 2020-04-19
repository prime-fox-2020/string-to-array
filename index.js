function stringToArray(str) {
  let res = [];
  let temp = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ',') {
      res.push(temp);
      temp = [];
    }
    else if (i === str.length-1) {
      temp.push(str[i]);
      res.push(temp);
    }
    else {
      temp.push(str[i]);
    }
  }
  return res;
}


//test case

console.log(stringToArray("aqrst,ukaei,ffooo"))
