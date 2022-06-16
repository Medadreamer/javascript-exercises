const repeatString = function(string, num) {
    if(num < 0) {
        return 'ERROR';
    } 
    else if(num === 0) {
        return '';
    }
    let stringCopy = string
    for(let i = 1; i < num; i++) {
        stringCopy += string;
    }
    return stringCopy;
};

// Do not edit below this line
module.exports = repeatString;
