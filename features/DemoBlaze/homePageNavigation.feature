Feature: Homepage

Scenario: Verify "About Us" video is displayed
    Given I am on DemoBlaze homepage
    When I click the "About Us" link
    Then I verify "About Us" video is enabled

Scenario: Verify users can still see their previously selected items in cart, after logging out and logging back in
    Given I am on DemoBlaze homepage
    When I click the "Log in" link
    And I type "demouser@outlook.com" as username
    And I type "demopassword" as demoPassword
    And I click "Log in" button
    And I click on "Nokia Lumia 1520"
    And I click "Add to cart"
    And I click the "Cart" link
    And I click the "Log out" link
    And I click the "Cart" link
    Then I verify cart total has no value


    
      

