// register button
document.getElementById('register').onclick = function () {
    location.href = "sign-up.html";
};

//login button
document.getElementById('login').onclick = function () {
    location.href = "sign-in.html";
};

//form 
function validateInput() {
    const form = document.forms["login-form"]

    const emailTxt = form['email'].value
    const passwordTxt = form['password'].value

    let message = ''

    if(!emailTxt || !passwordTxt) {
        message = 'All field must be filled!'
    } else if(!emailTxt.endsWith('.com')) {
        message = 'Email must ends with .com!'
    } else if(passwordTxt.length < 8) {
        message = 'Password must be more than 8 characters!'
    }

    // check email & password
    if(message) {
        document.getElementById('error').innerHTML = message
        return false
    } else {
        // email: jasonandolens21@gmail.com, password: jason123
        if(emailTxt == 'jasonandolens21@gmail.com' && passwordTxt == 'jason123') {
            return true
        } else {
            message = 'Email or Password incorrect!'
            document.getElementById('error').innerHTML = message
            return false
        }

    }
}