function stringToArray(str) {

  let res = [];
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ",") {
      temp.push(str[i]);
    } else {
      res.push(temp);
      temp = [];
    }
    if (i === str.length - 1) {
      res.push(temp);
    }
  }

  return res;
}

console.log(stringToArray("muham,elvan,rafif"));
console.log(stringToArray("bogor,depok,tajur"));
