//A closure is a function having access to the parent scope, even after the parent function has closed. That means a private variable can access global variable.
//In this case second function access the first function variable and increment every time without intializing it to 0.

var add = (function()
{
    var counter = 0;
    return function()
    {
        return counter +=1;
    }
})();



