const fibonacci = function(n) {
    n=parseInt(n);
    if( n<0)
        return "OOPS"
        if (n==1)
        return 1;
        if (n==0)
        return 0;
    for(let i=0;i<=n-2;i++)
    {
        
        let arr=[0,1]
        let sum=0;
        for(let i=0;i<=n-2;i++)
        {
            sum=arr[i]+arr[i+1];
            arr[i+2]=sum;
        }
        return arr[n];
    }
};

// Do not edit below this line
module.exports = fibonacci;
