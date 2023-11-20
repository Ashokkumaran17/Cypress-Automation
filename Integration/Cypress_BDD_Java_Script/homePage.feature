Feature: Login to a web
  Scenario: Verify the login Feature
    Given I open the website
    When I enter my username "selenium_java_2023@yopmail.com" and password "Java2023"
    And I click the login button
    Then I should be logout