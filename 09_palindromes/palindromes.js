const palindromes = function (str) {
    str=str.toLowerCase();
    str =str.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, " ").replace(/\s/g,'');
    let rev='';
    for(let i=str.length-1;i>=0;i--)
    {
        rev+=str.charAt(i);
    }
    rev=rev.toLowerCase().replace(/\s/g,'');
    return str===rev
};

// Do not edit below this line
module.exports = palindromes;
