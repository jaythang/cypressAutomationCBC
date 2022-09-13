

Feature: See Companies List
Login as Staff and check the Company ist

Scenario: Logging in as staff with valid credentials

Given I Login to loginPage
When I enter my username
And I enter my password
Then I click on Login
Then I should go to the Admin Dashboard
Then I should be able to see the company List
Then I should be able to search for a company
