/*
var n=12,c=0;
for(var i=2;i<=n/2;i++)
{
    if(n%i==0)
    {   c=1;
        console.log("no");
        break;
    }
}
if(c==0){
    console.log("yes");
}
*/

//function
function prime(n)
{
    for(var i=2;i<n-1;i++)
{
    if(n%i==0)
    {   
        return "not";
    }
}
return "yes";
}
var res=prime(7);
console.log(res);