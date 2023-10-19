let on = document.querySelector(".eyeon")
let show = document.getElementById("pswd")
let off = document.querySelector(".eyeoff")
let otp = document.getElementById("otp")
on.addEventListener("click", function () {
    if (pswd.value.length < 1) {
        on.style.display = "block"
    }
    else {
        show.type = "text"
        off.style.display = "unset"
        on.style.display = "none"
    }
});
off.addEventListener("click", function () {
    show.type = "password"
    on.style.display = "unset"
    off.style.display = "none"
});