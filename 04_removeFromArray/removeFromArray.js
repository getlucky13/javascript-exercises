const removeFromArray = function(toReverse, ...theArgs) {
    //use a for loop to iterate through theArgs
    //check each ele in theArgs against toReverse
    //for each ele:
        //if = ele in toReverse, remove from toReverse
        //if not present in toReverse, do nothing
        //maybe make a function to check the values of theArgs
    return toReverse.filter(x => !theArgs.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
