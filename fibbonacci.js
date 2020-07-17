/* 
//for loop

var ar=[0,1];
for(var i=2;i<=10;i++)
{
    ar[i]=ar[i-1]+ar[i-2];
}
console.log(ar);
*/
/*
//Function
function fibbo(n)
{
    var ar=[0,1];
for(var i=2;i<=n;i++)
{
    ar[i]=ar[i-1]+ar[i-2];
}
return ar;
}
var res=fibbo(8);
console.log(res);
*/


//recursive
function f(n){
    if(n==0)
    {
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
        return f(n-1)+f(n-2);
    }
}

var res=f(10);
console.log(res);