/* eslint-disable no-undef */
// Testing the home page route - TDD unit

// // TDD Test Case Logic:
//    1. visit blog home page route url http://localhost:3000
//    2. Grab the url and ensure it should includes /index
//    3. Get the page title head con tained in the head section
//    4. Interact with the head title tag
//    5. The title should be contain the page title name 'Home Page'

describe('Home Page', () => {
  it('should visit the home page and check its route url and head title tag', () => {
    // Given
    cy.visit('http://localhost:3000/')

    // When
    cy.url().should('include', '/')

    // Then
    cy.get('title').should('have.text', 'Home Page')
  })
})
