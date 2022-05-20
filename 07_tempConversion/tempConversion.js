function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(temp) {
  let tempCel = (temp - 32)*(5/9);
  return round(tempCel, 1);
};

const ctof = function(temp) {
  let tempFar = (temp * 1.8) + 32;
  return round(tempFar, 1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
