const Commands = require("../Utils/Commands");
class CartPage {
    command = new Commands();

    // locators
    
    cartTotal = '#totalp';

    // functions

    async captureTotal () {
        return await this.command.getElementText(this.cartTotal);
    }


}

module.exports = CartPage;