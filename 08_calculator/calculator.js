const add = function(x,y) {
  return x+y;
	
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(x) {
  let result=0;
	for(const sum of x)
  {
    result+=sum;
  }
  return result;
};

const multiply = function(x) {
  let result=1;
	for(const multiple of x)
  {
    result*=multiple;
  }
  return result;
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
  let factorial=1;
	for(let i=x;i>0;i--)
  {
    factorial*=i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
