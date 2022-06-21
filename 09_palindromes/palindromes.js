const reverseString = function(string) {
    let reversedString = [];
    for(let i = string.length; i >= 0; i--) {
        if(string[i] !== undefined) {
            reversedString.push(string[i]);

        }
    }
    return reversedString.join('');
};


const palindromes = function (string) {
    string = string.toLowerCase();
    const specialChars = [',', '.', '!', '?', ' '];
    let stringArray = string.split('');
    
    for (let i = 0; i < stringArray.length; i++) {
        for (let j = 0; j < specialChars.length; j++) {
            if (stringArray[i] === specialChars[j]) {
                stringArray.splice(i, 1);
                i -= 1;
                break;
            }
        }
        
    }

    const reversedString = reverseString(stringArray.join(''));


    return reversedString == stringArray.join('');
};

// Do not edit below this line
module.exports = palindromes;
