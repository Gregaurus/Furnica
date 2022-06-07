// register button
document.getElementById('register').onclick = function () {
    location.href = "sign-up.html";
};

//login button
document.getElementById('login').onclick = function () {
    location.href = "sign-in.html";
};

let username = ''

//form 
function validateInput() {
    const form = document.forms["login-form"]

    const nameTxt = form['name'].value
    const passwordTxt = form['password'].value

    let message = ''
    console.log(nameTxt)
    console.log(passwordTxt)

    if(!nameTxt || !passwordTxt) {
        message = 'All field must be filled!'
    }

    // check email & password
    if(message) {
        document.getElementById('error').innerHTML = message
        return false
    } else {
        // CHECK
        let formData = JSON.parse(localStorage.getItem('dataUser')) || [];
        let exist = formData.length &&
        JSON.parse(localStorage.getItem('dataUser')).some(data => data.name == nameTxt && data.pass == passwordTxt);
        console.log(exist)
        if(!exist) {
            alert('Incorrect Username or Password!')
            return false
        } else {
            return true
        }
    }
}