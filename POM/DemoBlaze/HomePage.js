const Commands = require('../Utils/Commands');

class HomePage {
    commands = new Commands();

    // locators

    aboutUsLink = '=About us';
    homeLink = '=Home';
    contactLink = '=Contact';
    cartLink = '=Cart';
    logInLink = '=Log in';
    signUpLink = '=Sign up';
    nokiaLumiaLink = '=Nokia lumia 1520';
    logOutLink = '#logout2';



    // functions

    async navBarSelect (navBarSelection) {
        switch (navBarSelection.toLowerCase()) {
            case 'about us':
                await this.commands.clickElement(this.aboutUsLink);
                break;

            case 'home':
                await this.commands.clickElement(this.homeLink);
                break;

            case 'contact':
                await this.commands.clickElement(this.contactLink);
                break;
            
            case 'cart':
                await this.commands.clickElement(this.cartLink);
                break;
            
            case 'log in':
                await this.commands.clickElement(this.logInLink);
                break;

            case 'sign up':
                await this.commands.clickElement(this.signUpLink);
                break;

            case 'log out':
                await this.commands.clickElement(this.logOutLink);
        
            default:
                break;
        }
    }

}

module.exports = HomePage;