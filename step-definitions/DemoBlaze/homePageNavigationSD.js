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


Given(/^I am on DemoBlaze homepage$/, async () => {
  await browser.url("/");
});

When(/^I click the "(.+)" link$/, async (navBarSelection) => {
  await dBlazeHome.navBarSelect(navBarSelection);
  await commands.sleep(2);
});

When(/^I type "(.+)" as username$/, async (user) => {
  await login.inputUsername(user);
});

When(/^I type "(.+)" as demoPassword$/, async (password) => {
  await login.inputPassword(password);
});

When(/^I click "Log in" button$/, async () => {
  await login.clickLogIn();
});

When(/^I click on "Nokia Lumia 1520"$/, async () => {
  await commands.clickElement(dBlazeHome.nokiaLumiaLink);
});

When(/^I click "Add to cart"$/, async () => {
  await product.addProductToCart();
});







