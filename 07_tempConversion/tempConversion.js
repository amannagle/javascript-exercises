const ftoc = function(temp) {
  let result;
  result=((temp-32)*5)/9;
  result=parseFloat(result.toFixed(1));
  return result;
};

const ctof = function(temp) {
  let result;
  result=(temp*9)/5+32;
  result=parseFloat(result.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
