const Commands = require('../Utils/Commands');

class LoginPage {

    commands = new Commands();

    // locators

    userNameInput = '#loginusername';
    passWordInput = '#loginpassword';
    loginButton = '//button[text()="Log in"]'

    // functions

    async inputUsername (user) {

        await this.commands.typeInField(this.userNameInput, user);

    }

    async inputPassword (pass) {

        await this.commands.typeInField(this.passWordInput, pass);

    }

    async clickLogIn () {

        await this.commands.clickElement(this.loginButton);

    }

}

module.exports = LoginPage;