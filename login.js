function data(){
    let name = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    
    console.log(username,password);

    if(username ===""){
        document.querySelector('#errorusername').innerHTML = "please enter your username";
        let selectname = document.querySelector('#username');
        selectname.style.borderColor = "red"
         selectname.style.outlineColor = "red"
         return false;
    }

    else if(password ===""){
        document.querySelector('#errorpassword').innerHTML = "please enter your password";
        let selectpassword = document.querySelector('#password');
        selectpassword.style.borderColor = "red";
        selectpassword.style.outlineColor = "red";
        return false;
    }
    else if(password.length !== 8){
document.querySelector('#errorpassword').innerHTML = "password number should only 8 digit";
let selectpassword = document.querySelector('#password');
        selectpassword.style.borderColor = "red"
        selectpassword.style.outlineColor = "red"
        return false;
    }

}