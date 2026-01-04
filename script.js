function verifyCode() {
  const code = document.getElementById("entryCode").value.toUpperCase();
  const message = document.getElementById("message");

  if (code === "MMA") {
    window.location.href = "login.html";
  } else {
    message.textContent = "Invalid code";
  }
}