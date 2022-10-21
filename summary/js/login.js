//get user button 
document.getElementById('submit-button').addEventListener('click', function () {
    //get usre input
    const inputEmail = document.getElementById('input-email');
    const inputEmailText = inputEmail.value;
    //get user password
    const inputPassword = document.getElementById('input-password');
    const inputPasswordText = inputPassword.value;
    // the condition using a new html page
    if (inputEmailText == 'baba@gmail.com' && inputPasswordText == '12345') {
        window.location.href = 'bank.html'
    }
})