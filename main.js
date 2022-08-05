let name = document.querySelector("#name");
let age = document.querySelector("#age");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm");

name.onblur = function one() {
    if (name.value == "") {
        document.querySelector(".name").innerHTML = "*Please Enter Your Name";
        name.style.cssText = "border-color:red";
        return false;
    } else {
        document.querySelector(".name").innerHTML = "";
        name.style.cssText = "border-color:#2ecc71";
        return true;
    }
};
age.onblur = function two() {
    if (age.value == "") {
        document.querySelector(".age").innerHTML = "*Please Enter Your Age";
        age.style.cssText = "border-color:red";
        return false;
    }
    else {
        document.querySelector(".age").innerHTML = ""
        age.style.cssText = "border-color:#2ecc71";
        return true
    }
}
email.onblur = function three() {
    let reg = /\w+@\w+.\w+.?\w+?.?\w+?/ig;
    if (email.value == "") {
        document.querySelector(".email").innerHTML = "*Please Enter Your email";
        email.style.cssText = "border-color:red";
        return false;
    } else if (!reg.test(email.value)) {
        document.querySelector(".email").innerHTML = "*Invalid Email";
        email.style.cssText = "border-color:red";
        return false;
    }
    else {
        document.querySelector(".email").innerHTML = ""
        email.style.cssText = "border-color:#2ecc71";
        return true;
    }
}
number.onblur = function four() {
    let reg = /\d{11}/ig;
    if (number.value == "") {
        document.querySelector(".number").innerHTML = "*Please Enter Your Number";
        number.style.cssText = "border-color:red";
        return false;
    } else if (!reg.test(number.value)) {
        document.querySelector(".number").innerHTML = "*Invalid Number";
        number.style.cssText = "border-color:red";
        return false
    }
    else {
        document.querySelector(".number").innerHTML = ""
        number.style.cssText = "border-color:#2ecc71";
        return true
    }
}
password.onblur = function five() {
    if (password.value == "") {
        document.querySelector(".password").innerHTML = "*Please Enter Password";
        password.style.cssText = "border-color:red";
        return false;
    } else if (password.value.length < 5) {
        document.querySelector(".password").innerHTML = "*Please Enter Strong Password";
        password.style.cssText = "border-color:red";
        return false;
    }
    else {
        document.querySelector(".password").innerHTML = ""
        password.style.cssText = "border-color:#2ecc71";
        return true;
    }
}
confirmPassword.onblur = function six() {
    if (confirmPassword.value == "" || confirmPassword.value !== password.value) {
        document.querySelector(".confirm").innerHTML = "*Password Don't Match";
        confirmPassword.style.cssText = "border-color:red";
        return false;
    }
    else {
        document.querySelector(".confirm").innerHTML = ""
        confirmPassword.style.cssText = "border-color:#2ecc71";
        return true;
    }
}


