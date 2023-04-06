// contact
let name = document.getElementById(Sname);
var email = document.getElementById(email);
var subject = document.getElementById(subject);
var textarea = document.getElementById(textarea);


function checkValidity(){
    if(Sname==" " || email == " " || subject == " " || textarea == " "){
        alert("All area should be filled.");
    }
}