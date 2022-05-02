const findTheOldest = function(objArr) {
    return objArr.reduce((x,y)=>{
        if(x.yearOfDeath == undefined)
        x.yearOfDeath=new Date().getFullYear() 
        if((x.yearOfDeath-x.yearOfBirth)>(y.yearOfDeath-y.yearOfBirth))
        return x;
        return y;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
