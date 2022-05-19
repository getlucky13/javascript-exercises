const sumAll = function(a, b) {
    let theArgs = [...arguments];
    let theArgsSorted = theArgs.sort(function(a, b){return a - b});
    let areNums = theArgsSorted.every(element => {return typeof element == 'number'});
    let arePos = theArgsSorted.every(element => element > 0);
    let sum = 0;
    if (!areNums) return 'ERROR';
    if (!arePos) return 'ERROR';
    for (let i = theArgsSorted[1]; i >= theArgsSorted[0]; i--) {
        sum += i; 
    }
    return sum;
/*if (typeOf a != 'number' || typeOf b != 'number') {

}*/
};

// Do not edit below this line
module.exports = sumAll;
