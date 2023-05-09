document.getElementById("parent").innerHTML=("Something else");

// document.getElementById("parent").style.backgroundColor=("orange");
// document.getElementById("parent").style.color=("blue");

document.getElementById("parent").style.cssText=("background-color:orange; color:blue; text-align:centre")

document.getElementsByClassName("exercise")[0].innerHTML=("My name is Anukrama");
document.getElementsByClassName("exercise")[1].innerHTML=("I am a student.");
document.getElementsByClassName("exercise")[2].innerHTML=("My age is 19.");
document.getElementsByClassName("exercise")[3].innerHTML=("I study in herald.");
document.getElementsByClassName("exercise")[4].innerHTML=("Hi everyone!!!!");

document.getElementsByClassName("exercise")[0].style.cssText=("background-color:pink; color:red; text-align:centre")
document.getElementsByClassName("exercise")[1].style.cssText=("background-color:red; color:black; text-align:centre")
document.getElementsByClassName("exercise")[2].style.cssText=("background-color:green; color:white; text-align:centre")
document.getElementsByClassName("exercise")[3].style.cssText=("background-color:white; color:black; text-align:centre")
document.getElementsByClassName("exercise")[4].style.cssText=("background-color:purple; color:pink; text-align:centre")

document.getElementsByTagName("h1")[2].style.cssText=("text-transform:uppercase; text-align:left")


document.getElementsByTagName("h2")[1].style.cssText=("text-transform:uppercase; text-align:right")

document.querySelector("h2").innerHTML=("I am you.");
document.querySelector("#hi").innerHTML=("I hate you.");
document.querySelector(".hey").innerHTML=("I love you.");

const change = document.querySelectorAll("h3");
for(i=0; i<=change.length;i++)
{
    change[i].innerHTML=("I am happy.");
}

// function myFunction(){
//     document.open();
//     document.write("<h1> Hello world <\h1>");
//     document.close();
// }

function myFunction()
{
    const myWindow = window.open();
    myWindow.document.write("<h1> Hello world <\h1>");
    myWindow.document.close();
}