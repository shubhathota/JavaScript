function btnClicked()
 {
    alert("Hello World!!");
  }

  function paraMouseOver()
  {
    document.getElementById("demo").setAttribute("style","color:blue");
  }

  function btnMouseOver()
  {
    document.getElementById("myBtn").setAttribute("style","color:red");
  }

  function validateForm()
  {
    var name=document.getElementById("name");
    var phno=document.getElementById("phno");

    if(name.value == "")
    {
      alert("Enter the name");
    }

    if(!(isNaN(name.value)))
    {
      alert("Enter the text");
    }
   


   if(isNaN(phno.value))
    {
      alert("Enter the number");
    }
   
  }

  document.getElementById("myBtn").addEventListener("click", btnClicked);
  document.getElementById("demo").addEventListener("mouseover", paraMouseOver);
  
