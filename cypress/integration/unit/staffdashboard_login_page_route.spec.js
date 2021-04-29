/* eslint-disable no-undef */
// Testing the staff dashbaord login page route - TDD unit

// // TDD Test Case Logic:
//    1. visit staff login page route url http://localhost:3000/staffdashboard
//    2. Grab the url and ensure it should includes /staffdashboard/index
//    3. Get the page title head contained in the head section
//    4. Interact with the head title tag
//    5. The title should contain the page title name 'Staff Login'

describe('The Staff Dashboard Login Page', () => {
  it('should visit the staff dashbaord login page and check its route url and head title tag', () => {
    // Given
    cy.visit('http://localhost:3000/staffdashboard/')

    // When
    cy.url().should('include', '/staffdashboard/')

    // Then
    cy.get('title').should('have.text', 'Staff Login')
  })
})
