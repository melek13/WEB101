﻿function checkLogin() {

    var isLogin = sessionStorage.getItem("isLogin"); //giriş yapılıp yapılmadığını tutuyor.
    var user = sessionStorage.getItem("user");
    user = user.split(",");

    var username = user[0];

    if (isLogin == true) {
        document.getElementById("dv_btn").style.display = "none";
        document.getElementById("header_sag").innerHTML = "Kullanıcı: " + username;
        document.getElementById("logout").style.display=" ";
    }

}