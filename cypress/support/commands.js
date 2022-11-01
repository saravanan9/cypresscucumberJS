Cypress.Commands.add("selectProduct", (productName) => { 
    cy.get('h4.card-title>a').each(($el, index, $list) => {
        const name = $el.text()
        if(name.includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click()
        }
     })
})

Cypress.Commands.add("setViewPort", (size) => { 
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }
})

Cypress.Commands.add('setLocatorType', function (locator) {
  let setElement
  if(locator.includes("//"))
  setElement=cy.xpath(locator)
  else
  setElement=cy.get(locator)
  return setElement
})