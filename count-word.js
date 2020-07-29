var string="i am a good   girl";
var c=0;
for(var i=0;i<string.length;i++){
    if(string[i]==" "&&string[i-1]!=" ")
    {
       c++;
    }
}
console.log(c+1);