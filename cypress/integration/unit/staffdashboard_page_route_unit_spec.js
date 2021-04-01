/* eslint-disable no-undef */
// Testing the staff dashbaord page route - TDD unit

// // TDD Test Case Logic:
//    1. visit staff dashboard route url
//    2. url chould include /staffdashboard/dashboard
//    3. Query for the head title tag
//    4. Interact with the head title tag
//    5. The title should be contain the page title

describe('The Staff Dashboard Page', () => {
  it('should visit the staff dashbaord page and check its route url and head title tag', () => {
    // Given
    cy.visit('http://localhost:3000/staffdashbaord/dashboard')

    // When
    cy.url().should('include', '/staffdashbaord/dashboard')

    // Then
    cy.get('title').should('have.text', 'Staff Dashboard')
  })
})

//  Cypress test case logic reminder
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.