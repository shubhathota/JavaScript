
function windowOp()
{
    var newWindow = window.open("http://google.com","newWindow","height=100,width=200");
    newWindow.moveTo(200,150);
    //newWindow.close();
 
}

//windowOp();

function navigatorProp()
{
    document.write("<br>" +navigator.appCodeName);
    document.write("<br>" +navigator.appName);
    document.write("<br>" +navigator.platform);
    document.write("<br>" +navigator.cookieEnabled);
    document.write("<br>" +navigator.product);

}

//navigatorProp();

function locationProp()
{
    console.log("href of location:" +location.href);
}

locationProp();

window.alert("Try It");