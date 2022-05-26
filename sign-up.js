//form 
function validateInput() {
    const form = document.forms["register-form"]

    const nameTxt = form['name'].value
    const emailTxt = form['email'].value
    const passwordTxt = form['password'].value

    let message = ''

    if(!nameTxt || !emailTxt || !passwordTxt) {
        message = 'All field must be filled!'
    } else if(nameTxt.length < 5) {
        message = 'Name must be at least 5 characters!'
    } else if(!emailTxt.endsWith('.com')) {
        message = 'Email must ends with .com!'
    } else if(passwordTxt.length < 8) {
        message = 'Password must be more than 8 characters!'
    }

    if(message) {
        document.getElementById('error').innerHTML = message
        return false
    } else {
            message = ` 
                    Are you sure want to register?\n
                    Name: ${nameTxt}\n
                    Email: ${emailTxt}\n
                    `
        
            return confirm(message)
    }  
}