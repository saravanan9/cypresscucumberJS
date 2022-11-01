//const demoguru = new demoguruutil()
//import demoguruutil from '../utilitiesfile/util'

// Login and Logout locators
const email = '#email'
const password = '#password'
const Login = 'input[name="submit"]'
const LoginErrrorMessage = '//b[text()="Enter your Email address and password correct"]'
const BrokerInsuranceHeader= '//h2[text()="Broker Insurance WebPage"]'
const Logout = 'input[value="Log out"]'
const LoginText = '//h3[text()="Login"]'

var data = require ('../../fixtures/example.json')


//Verify premium value in Request quotation page and reset form





const RequestQuotationLink ='#newquote>a'
const BreakdownCoverDropdown = '#quotation_breakdowncover'
const ScreenRepairRadioButton = '#quotation_windscreenrepair_t'
const IncidentsTextbox = '#quotation_incidents'
const RegistrationNoTextbox = '#quotation_vehicle_attributes_registration'
const AnnualMilegeTextbox = '#quotation_vehicle_attributes_mileage'
const EstimatedValueTextbox = '#quotation_vehicle_attributes_value'
const ParkingLocationDropdown = '#quotation_vehicle_attributes_parkinglocation'
const Year = 'select[name="year"]'
const Month = 'select[name="month"]'
const requestquotationDate = 'select[name="date"]'
const calculatepremium = '[type="button"][value="Calculate Premium"]'
const verifypremiumvalue = '[title="This is the Premium including the discount you have"]'
const logout_locator = '[value="Log out"]'
const resetform_locator = '#resetquote'

import Utils from '../Utilities/Utils'
const utils = new Utils()

Given(/^I am on the home page$/,()=>{
    cy.visit('https://demo.guru99.com/insurance/v1/index.php')
})

When(/^I login with Invalid credentials$/,()=>{
    cy.get(email).type(data.invalidmail)
    cy.get(password).type(data.invalidpassword)
    cy.get(Login).click()
})

Then(/^I Should not be allowed to login$/,()=>{
    cy.setLocatorType(LoginErrrorMessage).should('have.text',"Enter your Email address and password correct")
})

When(/^I login with valid credentials$/,()=>{
    cy.get(email).type(data.validmail)
    cy.get(password).type(data.validpassword)
    cy.get(Login).click()
})

Then(/^I should be allowed to login$/,()=>{
    cy.setLocatorType(BrokerInsuranceHeader).should('have.text','Broker Insurance WebPage')
})
When(/^I navigate to Request quotation page$/,()=>{
    cy.get(RequestQuotationLink).click()
})
// When(/^I Requested Quotation by entering fields like '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)' and '(.*)'$/,(prebreakdowncover,preincidents,preregistrationNo,preannualMileage,preestimatedvalue,preParkinglocation,preyear,premonth,predate)=>{    
//     cy.get(BreakdownCoverDropdown).select(prebreakdowncover)
//     cy.get(ScreenRepairRadioButton).check()
//     cy.get(IncidentsTextbox).type(preincidents)
//     cy.get(RegistrationNoTextbox).type(preregistrationNo)
//     cy.get(AnnualMilegeTextbox).type(preannualMileage)
//     cy.get(EstimatedValueTextbox).type(preestimatedvalue)
//     cy.get(ParkingLocationDropdown).select(preParkinglocation)
//     cy.get(Year).select(preyear)
//     cy.get(Month).select(premonth)
//     cy.get(requestquotationDate).select(predate)
// }) 

When(/^I Requested Quotation by entering fields like '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)' and '(.*)'$/,(prebreakdowncover,preincidents,preregistrationNo,preannualMileage,preestimatedvalue,preParkinglocation,preyear,premonth,predate)=>{    
    cy.get(BreakdownCoverDropdown).select(prebreakdowncover)
    cy.get(ScreenRepairRadioButton).check()
    cy.get(IncidentsTextbox).type(preincidents)
    cy.get(RegistrationNoTextbox).type(preregistrationNo)
    cy.get(AnnualMilegeTextbox).type(preannualMileage)
    cy.get(EstimatedValueTextbox).type(preestimatedvalue)
    cy.get(ParkingLocationDropdown).select(preParkinglocation)
    cy.get(Year).select(preyear)
    cy.get(Month).select(premonth)
    cy.get(requestquotationDate).select(predate)
})

When(/^I should click the calculate premium$/,()=>{
    cy.get(calculatepremium).click() 
})
Then(/^verified the premium value$/,()=>{
    cy.get(verifypremiumvalue).should('contain',"£60")
})
When(/^I logout from the application$/,()=>{
    cy.get(logout_locator).click(); 
})
When(/^I should click the Reset form$/,()=>{
    cy.get(resetform_locator).click() 
})
Then(/^I shouldn't able to see values in the textbox under Request quotation page$/,()=>{
    cy.get(IncidentsTextbox).should('be.empty')
    cy.get(RegistrationNoTextbox).should('be.empty')
    cy.get(AnnualMilegeTextbox).should('be.empty')
    cy.get(EstimatedValueTextbox).should('be.empty')
})

When(/^I logout from the application$/,()=>{
    cy.get(Logout).click(); 
})
Then(/^Verified the logout is succesful$/,()=>{
    cy.setLocatorType(LoginText).should('have.text','Login')
})
