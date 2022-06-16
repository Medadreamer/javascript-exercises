const sumAll = function(a, b) {
    if( a < 0 || b < 0 || typeof(a) !== 'number' || typeof(b) !== 'number') {
        return 'ERROR'
     }

    let result = 0;
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
