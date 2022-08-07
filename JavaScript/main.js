let name = document.querySelector("#name");
let age = document.querySelector("#age");
let email = document.querySelector("#email");
let number = document.querySelector("#number");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm");
let form = document.querySelector("form");
let btn = document.querySelector("#btn");
let inputFields = Array.from(document.querySelectorAll(".field"));

btn.addEventListener("click", function () {
    inputFields.map(function (e) {
        if (e.classList.contains("success")) {
            form.onsubmit = () => true;
        } else {
            e.style.cssText = "border-color:red";
            form.onsubmit = () => false;
        }
    })
})
name.onblur = function () {
    let reg = /^[a-zA-Z\s]+$/ig;
    if (name.value == "") {
        document.querySelector(".name").innerHTML = "*Please Enter Your Name";
        name.style.cssText = "border-color:red";
    } else if (!reg.test(name.value)) {
        document.querySelector(".name").innerHTML = "*Invalid Name";
        name.style.cssText = "border-color:red";
    } else {
        document.querySelector(".name").innerHTML = "";
        name.style.cssText = "border-color:#2ecc71";
        name.classList.add("success");
    }
};
age.onblur = function () {
    let reg = /\d{2}/ig;
    if (age.value == "") {
        document.querySelector(".age").innerHTML = "*Please Enter Your Age";
        age.style.cssText = "border-color:red";
    } else if (!reg.test(age.value)) {
        document.querySelector(".age").innerHTML = "*Invalid Age";
        age.style.cssText = "border-color:red";
    } else {
        document.querySelector(".age").innerHTML = ""
        age.style.cssText = "border-color:#2ecc71";
        age.classList.add("success");
    }
}
email.onblur = function () {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig;
    if (email.value == "") {
        document.querySelector(".email").innerHTML = "*Please Enter Your email";
        email.style.cssText = "border-color:red";
    } else if (!reg.test(email.value)) {
        document.querySelector(".email").innerHTML = "*Invalid Email";
        email.style.cssText = "border-color:red";
    }
    else {
        document.querySelector(".email").innerHTML = ""
        email.style.cssText = "border-color:#2ecc71";
        email.classList.add("success");
    }
}
number.onblur = function () {
    let reg = /01[0125]\d{8}/ig;
    if (number.value == "") {
        document.querySelector(".number").innerHTML = "*Please Enter Your Number";
        number.style.cssText = "border-color:red";
    } else if (!reg.test(number.value)) {
        document.querySelector(".number").innerHTML = "*Invalid Number";
        number.style.cssText = "border-color:red";
    }
    else {
        document.querySelector(".number").innerHTML = ""
        number.style.cssText = "border-color:#2ecc71";
        number.classList.add("success");
    }
}
password.onblur = function () {
    if (password.value == "") {
        document.querySelector(".password").innerHTML = "*Please Enter Password";
        password.style.cssText = "border-color:red";
    } else if (password.value.length < 5) {
        document.querySelector(".password").innerHTML = "*Please Enter Strong Password";
        password.style.cssText = "border-color:red";
    }
    else {
        document.querySelector(".password").innerHTML = ""
        password.style.cssText = "border-color:#2ecc71";
        password.classList.add("success");
    }
}
confirmPassword.onblur = function () {
    if (confirmPassword.value == "" || confirmPassword.value !== password.value) {
        document.querySelector(".confirm").innerHTML = "*Password Don't Match";
        confirmPassword.style.cssText = "border-color:red";
    }
    else {
        document.querySelector(".confirm").innerHTML = ""
        confirmPassword.style.cssText = "border-color:#2ecc71";
        confirmPassword.classList.add("success");
    }
}


