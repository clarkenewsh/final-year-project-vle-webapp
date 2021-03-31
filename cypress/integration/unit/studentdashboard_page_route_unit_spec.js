/* eslint-disable no-undef */
// Testing the Student Dashboard home page route - TDD unit

// // TDD Test Case Logic:
//    1. visit student dashbaord page route url
//    2. url chould include /studentdashboard
//    3. Query for the head title tag
//    4. Interact with the head title tag
//    5. The title should be contain the page title

describe('The Student Dashbaord Home Page', () => {
  it('should visit the student dashboard home page and check its route url and head title tag', () => {
    // Given
    cy.visit('http://localhost:3000/studentdashboard')

    // When
    cy.url().should('include', '/studentdashboard')

    // Then
    cy.get('title').should('have.text', 'Student Dashboard Home')

    // Save screenshot of test result to screenshots folder
    cy.screenshot()
  })
})

//  Cypress test case logic reminder
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.
