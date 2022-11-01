import Utils from '../Utilities/Utils'
const utils = new Utils()

Given(/^User navigates to url '(.*)' and checks url contains '(.*)'$/,(url,partialURL)=>{
    cy.visit(url);
    utils.validateURL(partialURL)})
