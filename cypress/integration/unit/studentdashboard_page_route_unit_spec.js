/* eslint-disable no-undef */
// Testing the Student Dashboard page route - TDD unit

// // TDD Test Case Logic:
//    1. visit student dashbaord page route url
//    2. url chould include /studentdashboard/dashboard
//    3. Query for the head title tag
//    4. Interact with the head title tag
//    5. The title should be contain the page title

describe('The Student Dashbaord Page', () => {
  it('should visit the student dashboard page and check its route url and head title tag', () => {
    // Given
    cy.visit('http://localhost:3000/studentdashboard/dashboard')

    // When
    cy.url().should('include', '/studentdashboard/dashboard')

    // Then
    cy.get('title').should('have.text', 'Student Dashboard')
  })
})

//  Cypress test case logic reminder
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.
