function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "maharani") {
        window.location.href = "index2.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}