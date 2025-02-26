function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "maharani") {
        window.location.href = "index2.html";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});