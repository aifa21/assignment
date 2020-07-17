function factorial(n)
{
    var i=1;
    var fact=1;
    while(i<=n)
    {
       fact=fact*i;
       i++;
    }
    return fact;
}

var num=4;
var output=factorial(num);
console.log(output);