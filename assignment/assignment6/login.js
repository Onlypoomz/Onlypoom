window.onload = loginLoad;

function loginLoad() {
    var clickButton_regis = document.getElementById("myLogin");
    clickButton_regis.onsubmit = checkLogin;
}

function checkLogin() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username1 = urlParams.get('username')
    const password1 = urlParams.get('password1')
    console.log(username1);
    console.log(password1);
    let username2 = document.forms["myLogin"]["username2"].value;
    let password2 = document.forms["myLogin"]["password2"].value;
    console.log(username2 === username1 && password2 === password1)
    if (username2 === username1 && password2 === password1) {
        alert("Login สำเร็จ");
    } else {
        alert("username หรือ password ไม่ต้อง");
        return false;
    }
}