const fibonacci = function(index) {
    if(index < 1) {
        return 'OOPS'
    }
    const series = [1, 1];
    let number = 0;
    for (let i = 1; i <= index; i++) {
        number = series[series.length - 1] + series[series.length - 2];
        series.push(number);
        
    }
    return series[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
