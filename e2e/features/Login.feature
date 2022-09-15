Feature: See Companies List


Scenario: Logging in as staff with valid credentials

Given I Login to loginPage
When I enter my username
And I enter my password
Then I click on Login