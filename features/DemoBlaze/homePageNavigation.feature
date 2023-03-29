Feature: Homepage
    Background: DemoBlazeHome
        Given I am on DemoBlaze homepage

    Scenario: Verify "About Us" video is displayed
        When I click the "About Us" link
        Then I verify "About Us" video is enabled







