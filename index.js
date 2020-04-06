stringToArray = string => {
    let cache = []
    string = string.split(',');
    for (str of string) {
        cache.push(str.split(''))
    }
    return cache;
}

// test case
console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('google,facebook,juniper'))