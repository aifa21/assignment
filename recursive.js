
function recursive(n){
    

    if(n==0){
        return 1;
    }
    else 
    {
        return n*recursive(n-1);
    }
    
}

var n=4;
var output=recursive(n);
console.log(output);