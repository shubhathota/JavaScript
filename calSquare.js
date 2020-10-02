
//named function
function ncalSquare(a)
{
    return a*a;
}

console.log('calling named function:' + ncalSquare(9));

//anonymous function

var aCal=function(b)
{
    return b*b;
}
console.log('calling anonymous function:' + aCal(3));

//new constuctor
var cCal=new Function("a","return a*a")
console.log('calling constructor function:' + cCal(2));

//self invoking function
(function(a)
{
    console.log('calling self invoking function:' + a*a);
    return(a*a);
})(5);
