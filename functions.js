//named function

function addNum(a, b)
{
    return (a+b);
}

let result = addNum(2, 7);
console.log(result);

//Anonymous function(no pre defined name to function)

var sum = function(a, b)
{
    return (a+b);
}

console.log(sum(3,6));

setTimeout(function()
{
    alert('msg displayed after 3 seconds');
},
3000)

//constructor

var cons = new Function("a","b", "console.log('in constuctor function'); return a+b;");
console.log(cons(5,5));

//self invoked function

(function(a,b)
{
    console.log('in self invoked function');
    return(a+b);
})(2+4);