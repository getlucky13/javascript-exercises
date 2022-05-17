function repeatString(string, num) {
    let stringFinal = string;
    numFix = parseInt(num);
    for (i = numFix; i>1; i--) {
        stringFinal =`${stringFinal}${string}`;
    }
    return stringFinal;
};

// Do not edit below this line
module.exports = repeatString;
