class Login {

    constructor() {

    }
    login() {
        const usernameInput = document.getElementById('username')
        console.log('from login() usernameInput', usernameInput)

        const passwordInput = document.getElementById('password')

        let username = usernameInput.value;
        let password = passwordInput.value;
        console.log('username', username);
        console.log('username', username);

        if(username == 'erome' && password == 'password123') {
            this.goToHome
        } else {
            this.displayError();
        }
    }

    displayError() {
        const errorBox = document.getElementById('error-box')
        errorBox.innerHTML = 'User not found';
        console.log('errorBox.innerHTML',
         errorBox.innerHTML
        );
        errorBox.style = "display.block";
    }

    goToHome() {
        window.location.href = 'index.html'
    }
}

const login = new Login();