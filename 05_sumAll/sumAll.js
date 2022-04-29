const sumAll = function(x,y) {
    if(x<0 || typeof(y)!="number")
    {
        return "ERROR"
    }
    let sum=0;
    for(let i=x;i<=y;i++)
    sum+=i;
    for(let i=x;i>=y;i--)
    sum+=i;
    return sum
};

// Do not edit below this line
module.exports = sumAll;
