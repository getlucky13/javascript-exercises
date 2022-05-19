const removeFromArray = function(toReverse, ...theArgs) {
    return toReverse.filter(x => !theArgs.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
