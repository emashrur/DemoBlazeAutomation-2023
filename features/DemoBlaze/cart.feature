Feature: Cart
    Background: DemoBlazeHome
        Given I am on DemoBlaze homepage

    Scenario: Verify that when a user logs out of his account, the products in his cart dissapears and resets back into an empty
        When I click the "Log in" link
        And I type "demouser@outlook.com" as username
        And I type "demopassword" as demoPassword
        And I click "Log in" button
        And I click on "Nokia Lumia 1520"
        And I click "Add to cart"
        And I click the "Cart" link
        And I check the cart total
        And I click the "Log out" link
        And I click the "Cart" link
        Then I verify cart total has no value

    Scenario: Verify users can still see their previously selected items in cart, after logging out and logging back in
        When I click the "Log in" link
        And I type "demouser@outlook.com" as username
        And I type "demopassword" as demoPassword
        And I click "Log in" button
        And I click on "Nokia Lumia 1520"
        And I click "Add to cart"
        And I click the "Cart" link
        And I check the cart total
        And I click the "Log out" link
        And I click the "Log in" link
        And I type "demouser@outlook.com" as username
        And I type "demopassword" as demoPassword
        And I click "Log in" button
        And I click the "Cart" link
        Then I verify the cart total value is as expected

