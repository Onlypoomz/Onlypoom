window.onload = pageLoad;

function pageLoad() {
    var clickButton_regis = document.getElementById("myForm");
    clickButton_regis.onsubmit = validateForm;
}

function validateForm() {
    let passwordRegis = document.forms["myForm"]["password1"].value;
    let repasswordRegis = document.forms["myForm"]["password2"].value;
    if (passwordRegis === repasswordRegis) {
        alert("Ok");
    } else {
        alert("password ไม่ตรงกัน!");
        return false;
    }
}