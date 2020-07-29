//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.


var arr=[1,2,3,4,5,2,4,6];
var unique=[];

for(var i=0;i<arr.length;i++){
    var element=arr[i];
    var index=unique.indexOf(element);
    if(index==-1){
        unique.push(element);
    }
}
console.log(unique);