const reverseString = function(string) {
    let reversedString = [];
    for(let i = string.length; i >= 0; i--) {
        reversedString.push(string[i]);
    }
    return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;
