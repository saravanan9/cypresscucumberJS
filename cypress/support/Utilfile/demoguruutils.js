class Utilities

{

visit(url)
{
    cy.visit(url)
}

validateURL(value)
{
    cy.url().should('include',value);
}

validatePageTitle(value)
{
    cy.title().should('be.equal',value)
}

typeValue(locator,value)
{
    cy.get(locator).type(value).should('have.value', value);
}

clearTypeValue(locator,value)
{
    cy.get(locator).clear().type(value).should('have.value', value);
}

clickButton(locator)
{
    cy.get(locator).click()
}

clickButtonByIndex(locator,index)
{
    cy.get(locator).eq(index).click()
}

mouseOver(locator)
{
    cy.get(locator).trigger('mouseover')  
}

selectValueByOption(locator,value)
{
    cy.get(locator).select(value)
}

checkElement(locator)
{
    cy.get(locator).check()
}

uncheckElement(locator)
{
    cy.get(locator).uncheck()
}

validationByText(locator,value)
{
    cy.get(locator).should('have.text', value)   
}

validateAlert(message)
{
    cy.on('window:alert',(str) =>
      {
          expect(str).to.equal(message)
      })
}

getTextByPromise(locator)
{
    cy.get(locator).then(function(result){
        const text=  result.text()
        cy.log('the result is'+text)
      })
}

checkElementVisibility(locator)
{
    cy.setLocatorType(locator).should('be.visible')
}

}

export default Utilities
