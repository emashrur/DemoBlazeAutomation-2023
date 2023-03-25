const Commands = require("../Utils/Commands");

class ProductPage {
    commands = new Commands();

    // locators

    addToCartLink = '=Add to cart';
    okButton = '//button[text()="OK"]'

    // function

    async addProductToCart() {
        await this.commands.clickElement(this.addToCartLink);
    }


}

module.exports = ProductPage;