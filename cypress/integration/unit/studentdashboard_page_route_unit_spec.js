/* eslint-disable no-undef */
// Testing the Student Dashboard page route - TDD unit

// // TDD Test Case Logic:
//    1. visit staff login page route url http://localhost:3000/studentdashboard/dashboard
//    2. Grab the url and ensure it should includes /studentdashboard/dashboard
//    3. Get the page title head contained in the head section
//    4. Interact with the head title tag
//    5. The title should contain the page title name 'Student Dashboard'

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
