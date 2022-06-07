// initialize LOCAL STORAGE dataUser
let dataUser = JSON.parse(localStorage.getItem("dataUser")) || [];

// placeholder data
localStorage.setItem("dataUser", JSON.stringify(dataUser));

// Validate & add data
function validateInput() {
  const form = document.forms["register-form"];
  const nameTxt = form["name"].value;
  const emailTxt = form["email"].value;
  const passwordTxt = form["password"].value;

  let message = "";

  if (!nameTxt || !emailTxt || !passwordTxt) {
    message = "All field must be filled!";
  } else if (nameTxt.length < 5) {
    message = "Name must be at least 5 characters!";
  } else if (passwordTxt.length < 8) {
    message = "Password must be more than 8 characters!";
  }

  if (message) {
    document.getElementById("error").innerHTML = message;
    return false;
  } else {
    let formData = JSON.parse(localStorage.getItem("dataUser")) || [];
    let exist =
      formData.length &&
      JSON.parse(localStorage.getItem("dataUser")).some(
        (data) => data.name == nameTxt || data.email == emailTxt
      );
    // Check if user is already registered
    const newData = {
      name: nameTxt,
      email: emailTxt,
      pass: passwordTxt,
    };
    if (!exist) {
      dataUser.push(newData);
      localStorage.setItem("dataUser", JSON.stringify(dataUser));
      alert("User Successfully Registered");
      return true;
    } else {
      alert("Username or Email Already Registered");
      return false;
    }
  }
}
