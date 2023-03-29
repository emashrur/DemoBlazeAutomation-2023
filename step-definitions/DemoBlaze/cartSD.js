const { Given, When, Then } = require("@wdio/cucumber-framework");
const HomePage = require("../../POM/DemoBlaze/HomePage");
const AboutUs = require("../../POM/DemoBlaze/AboutUs");
const LoginPage = require("../../POM/DemoBlaze/LoginPage");
const ProductPage = require("../../POM/DemoBlaze/ProductPage");
const CartPage = require("../../POM/DemoBlaze/CartPage");
const Commands = require("../../POM/Utils/Commands");
const { expect } = require("chai");

const dBlazeHome = new HomePage();
const commands = new Commands();
const aboutUs = new AboutUs();
const login = new LoginPage();
const product = new ProductPage();
const cart = new CartPage();

let cartTotalValue;

When(/^I verify cart total has a value$/, async () => {
  expect(await cart.captureTotal()).to.not.equal("");
});

When(/^I check the cart total$/, async () => {
  cartTotalValue = await cart.captureTotal();
});

Then(/^I verify cart total has no value$/, async () => {
  let finalTotal = await cart.captureTotal();
  expect(finalTotal).to.equal("");
});

Then(/^I verify the cart total value is as expected$/, async () => {
    expect(await cart.captureTotal()).to.equal(cartTotalValue);
})
