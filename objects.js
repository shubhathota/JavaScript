
//different ways to creating an object and its properties
    function createperson()
    {
        var person1 = {};
        person1['firstname'] = "shubha";
        person1['lastname'] = "thota"; 
        person1['age'] = "41";
        return person1;
    }

    var name = createperson();

    console.log("Firstname:" +name.firstname+" \nLastname:" +name.lastname+" \nage:" +name.age);
    
    function person2()
    {
        var person2 = {};
        person2.firstname = "srinivas";
        person2.lastname = "thota"; 
        person2.age = "40";
        return person2;
    }

    console.log(person2());

    function person3()
    {
        var person3 = {firsrname:"Cherry", lastname:"thota", age:"12"};
         return person3;
    }

    console.log(person3());

/*The this Keyword
In JavaScript, the thing called this is the object that "owns" the code.

The value of this, when used in an object, is the object itself.

In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.*/
    function person4()

    {
        this.firstname= "Madhu";
        this.lastname="Thota";
        this.age="7";
        person4.prototype.school = "HollyWell ETNS";//prototype allow to add new properties or method to object constructor


    }


    var name = new person4();
    console.log("Firstname:" +name.firstname+" \nLastname:" +name.lastname+" \nage:" +name.age+" \nschool:" +name.school);

var Animal = {type: "Invertebrates",
            displayType: function()
                            { console.log("The type is:"+this.type);
                            }
                        
            }
var Horse = Object.create(Animal);
Horse.type = "New";
Horse.displayType();

//Iterating the properties of an object
var x, txt = "";
var person = {name:"John", age:30, city:"New York"};

console.log("before deletion:" +txt);

delete  person.city;

for (x in person) {
txt += person[x] + " ";
}

console.log("after deletion:" +txt);



