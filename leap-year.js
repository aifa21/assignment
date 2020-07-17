function leap(year)
{
res=year%4;
if(res==0)
{
    return true;
}
else
{ return false;
}
}

var year=103;
if (leap(year)==true)
{
    console.log("yes");
}
else{
    console.log("no");
}
