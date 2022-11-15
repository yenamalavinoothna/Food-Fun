function upvalidate(){
    var password=document.getElementById("pass1");
    var pwd=document.getElementById("pass2");
    if(password.value.length>=8 && pwd.value.length>=8 && password.value===pwd.value){
        alert("Created account successfully");
        return false;
    }
    else{
        alert("Check your password or username");
    }
}
