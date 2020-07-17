function inchtofeet(inch)
{
    var feet=inch/12;
    return feet;
}
var arr=[1,288,156];
for(i=0;i<3;i++){
var ft=inchtofeet(arr[i]);

console.log(ft);
}