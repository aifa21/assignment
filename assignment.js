
//feet to mile
function feetToMile(feet)
{
    mile=feet/5280;
    if(feet<0)
    {
        return "feet cannot be negatibe";
    }
    else{
    return mile;
    }

}

//function woodCalculator
function woodCalculator(chair,table,bed){
    var total=(1*chair)+(3*table)+(5*bed);
   if(total<0){
       return "Total cannot be negative."
   }
   else{
       return total;
   }


}

//functon brick-Calculator

function brickCalculator(floor) {

    if(floor<0||floor==0){
        return "floor cannot be negative or zero."
    }
    else if(floor>=1&&floor<=10)
    {  
        totalbrick=15*floor*1000;
        return totalbrick;
    }
    else if(floor>=11&&floor<=20)
    {  
        totalbrick=((10*15)+((floor-10)*12))*1000;
        return totalbrick;
    }
    else{
        totalbrick=((10*15)+(10*12)+((floor-20)*10))*1000;
        return totalbrick;
    }
    
}

//function of tinyfriends
function tinyFriend(name){
if(name.length==0){
return "Number of name is empty."
}
else{
    var tinyName=name[0];
    for(var i=0;i<name.length;i++){
        var currentName=name[i];
        if(currentName.length<tinyName.length){
            tinyName=currentName;
        }
    }
    return tinyName;
}
}
//........program.......
//output of mile

var Mile=feetToMile(2);
console.log("Mile = "+Mile);

//output of wood

var Total=woodCalculator(1,2,3);
console.log("Total = "+Total);

//output of brickcalculator
var Brick=brickCalculator(21);
console.log("Brick = "+Brick);

//output of tinyfriends
var Tinyname=tinyFriend([])
console.log("Tine-name="+Tinyname);