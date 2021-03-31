/* eslint-disable no-undef */
//  Cypress test case structure:
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.

// Testing the services page route and title - TDD unit

//    1. visit services page URL
//    2. url chould include /services uri
//    2. Query for the head title of the contact page
//    3. Interact with the head title tag
//    4. The title should be contain the page title

describe('The Services Page', () => {
  it('should visit the services page and check its url and head title tag', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000/services')

    // Should be on a new URL which includes '/'
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/services')

    // Page title should be Services Page
    cy.get('title')
      // eslint-disable-next-line padded-blocks
      .should('have.text', 'Services & cost')

    // Save screenshot of test result to screenshots folder
    cy.screenshot()
  })
})
