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

Then(/^I verify "About Us" video is enabled$/, async function () {
  const videoStatus = await aboutUs.verifyAboutUsVideo();

  expect(await videoStatus).to.be.true;
});