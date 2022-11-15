function myfunction(){
    var x=document.getElementById("pass");
    if(x.type==="password"){
        x.type="text";
    }
    else{
        x.type="password";
    }
}
function validate(){
    var password=document.getElementById("pass");
    if(password.value.length>=8){
        alert("login successful");
        window.location.replace("menu.html");
        return false;
    }
    else{
        alert("login unsuccessful");
        }
}
function contact(){
    alert("Your message has sent successfully");
}