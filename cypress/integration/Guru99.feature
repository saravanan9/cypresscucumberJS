Feature: Guru 99 Portal

Scenario: Verify the Login with Invalid and Valid credentials
    Given I am on the home page
    When I login with Invalid credentials
    Then I Should not be allowed to login
    When I login with valid credentials
    Then I should be allowed to login

Scenario Outline: Verify the Premium value in Request Quotation page
    When I navigate to Request quotation page
    When I Requested Quotation by entering fields like '<prebreakdowncover>', '<preincidents>', '<preregistrationNo>', '<preannualMileage>', '<preestimatedvalue>', '<preParkinglocation>', '<preyear>', '<premonth>' and '<predate>'
    When I should click the calculate premium
    Then verified the premium value
    

Examples:
| prebreakdowncover | preincidents | preregistrationNo | preannualMileage | preestimatedvalue | preParkinglocation | preyear | premonth    | predate |
| At home           | Accident     | tn65 S0099         | 45               | 1000              | Public Place       | 2014    | February    | 7       |
            

Scenario Outline: Reset form in Request Quotation page
    When I navigate to Request quotation page
    When I Requested Quotation by entering fields like '<prebreakdowncover>', '<preincidents>', '<preregistrationNo>', '<preannualMileage>', '<preestimatedvalue>', '<preParkinglocation>', '<preyear>', '<premonth>' and '<predate>'
    When I should click the Reset form 
    Then I shouldn't able to see values in the textbox under Request quotation page


Examples:
    | prebreakdowncover | preincidents | preregistrationNo | preannualMileage | preestimatedvalue | preParkinglocation | preyear | premonth    | predate|
    | At home           | Accident     | tn65 S0099        |  45              |    1000           |  Public Place      | 2014    | February    |  7     |


Scenario: Logout
    When I logout from the application
    Then Verified the logout is succesful
