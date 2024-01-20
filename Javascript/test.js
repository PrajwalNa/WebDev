function ValidatePass() {
  var pass = document.getElementById("password").value;
  var lenCheck = pass.length >= 12;
  var lowerCheck = /[a-z]/.test(pass);
  var upperCheck = /[A-Z]/.test(pass);
  var numCheck = /[0-9]/.test(pass);
  var specialCheck = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass);

  switch (true) {
    case !specialCheck:
      alert("Invalid Password: Missing Special Character");
      break;
    case !numCheck:
      alert("Invalid Password: Missing Number");
      break;
    case !upperCheck:
      alert("Invalid Password: Missing Upper Case Letter");
      break;
    case !lowerCheck:
      alert("Invalid Password: Missing Lower Case Letter");
      break;
    case !lenCheck:
      alert("Invalid Password: Password must be at least 12 characters long");
      break;
    default:
      alert("Password is valid");
  }
}
