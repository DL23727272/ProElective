function validate()
{
var password = document.getElementById("pass").value;
var username = document.getElementById("name").value;

if (username =="" && password =="")
 {
   document.getElementById('loginError' ).innerHTML = 'Invalid !!';
    return false;
 }
 else if (username =="")
 {
   document.getElementById('nameError').innerHTML = 'Fill up username!'; 
    return false;
 }
 else if (password =="")
 {
   document.getElementById('passError').innerHTML = 'Fill up Password!';
    return false;
 }
 else if(password.length < 8)
 {
   document.getElementById('passError').innerHTML = 'Password is at least 8 characters!!';
    return false;
 }
 else
 {
    window.open('index.html');
 }

}