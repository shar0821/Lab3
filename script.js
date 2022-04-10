function manageInput(){
  var y=document.querySelector(".form");
  //console.log("hello");
  for(let i=0;i<y.childNodes.length;i++)
  {  
      //console.log(y.childNodes[i].type + "/");
      if(y.childNodes[i].type=="input" || y.childNodes[i].type=="select")
         console.log(y.childNodes[i].innerHTML);
}
 function focus(){
     this.style.backgroundColor="blue";
 }

  
}
function formValidation()
{
var uname = document.registration.Name;
var Email = document.registration.Email;
var dept1 = document.registration.dept;
var u = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; 

if(allLetter(uname) )
{
if(allLetter1(clg))
{
if(alphanumeric(uadd))
{ 
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
}
}
}
return false;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('u_name must have alphabet characters only');
uname.focus();
return false;
}
}

function allLetter1(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('clg_name must have alphabet characters only');
clg.focus();
return false;
}
}

function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}

function allnumeric(uzip)
{ 
var numbers = /^[0-9]{6}$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} 

function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Succesfully Submitted');

window.location.reload()
return true;
}
}

function a(event){
  event.style.color="red";
}
function b(event){
  event.style.color="blue";
}
