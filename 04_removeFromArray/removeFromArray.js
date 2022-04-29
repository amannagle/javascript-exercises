const removeFromArray = function(arr,...nums) {
    for (const num of nums)
    {
        let index=arr.indexOf(num)
        if (index == -1)
        continue;
        arr.splice(index,1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
