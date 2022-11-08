function validate(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var errorText = document.getElementById('error-id');
    var message;

    errorText.style.padding = '20px';

    if (name.length < 2){
        message = "Enter a Valid Name"
        errorText.innerHTML = message
        return false
    }
    
    if (email.indexOf('@') == -1 || email.length < 7){
        message = "Enter a Valid Email Address"
        errorText.innerHTML = message
        return false
    }
    if (isNaN(phone) || phone.length < 11){
        message = "Enter a Valid Phone Number"
        errorText.innerHTML = message
        return false
    }

    alert('form submitted successfully')
    return true
}