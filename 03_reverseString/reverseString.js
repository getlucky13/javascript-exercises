const reverseString = function(string) {
    const stringArray = Array.from(string);
    stringArray.reverse();
    let stringReversed = stringArray.join('');
    return stringReversed;

};

// Do not edit below this line
module.exports = reverseString;
