var subjects = new Array('maths', 'physics');
var marks = new Array();
var num1;

let x;
subjects.push('chemistry');//adding chemistry to array
console.log(subjects);
console.log(subjects[x]);

//replacing index[1] with history
subjects[1]='history';
console.log(subjects[1]);

for(var j=0; j<subjects.length; j++)
{
    

    num1=parseFloat(prompt("Enter marks for subject "+ subjects[j]));
    marks[j] = num1;
    
}


for(m in marks)//m hold the index of the array in for-in loop
{
    
    console.log(marks[m]);
}

for(m of subjects)//m hold the value of the array in for-of loop
{
    console.log(m);
}

/*array methods
pop method removes the last element of the array

shift method removes the first elemtent of the array

push add element at the end of the array

unshift method add element at the beginning of the array

splice method add/removes element from the index position specified ex: (0,1)

concat add the array elements


*/