document.getElementById('submit-button').addEventListener('click', function () {
    // get user email
    const userEmailFilth = document.getElementById('user-email');
    const userEmail = userEmailFilth.value;
    // get user password
    const userPasswordFilth = document.getElementById('user-password');
    const userPassword = userPasswordFilth.value;
    // get user email and user password chack
    if (userEmail == 'hmsani@gmail.com' && userPassword == '12345') {
        window.location.href = 'bank.html'
    }

})