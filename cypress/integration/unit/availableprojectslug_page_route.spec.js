/* eslint-disable no-undef */
// Testing the available project slug path route url - TDD unit

// // TDD Test Case Logic:
//    1. visit dynamic available project slug url path http://localhost:3000/availableproject/project-title
//    2. Grab the url and ensure it should includes  /availableproject/project-title
//    3. Get the h1 tag with .available-project-title class
//    5. Assert the h1 .available-project-title class has the value of 'available-project-title'
//    6. Get the h1 tag text value
//    7. h1 tag should contain 'project example title'

describe('Available Project slug path url', () => {
  it('should visit a dynamic available project slug path and check its path route url and project title tag', () => {
    // Given
    cy.visit('http://localhost:3000/availableprojects/first-week-app')

    // When
    cy.url().should('include', '/availableprojects/first-week-app')

    // Then
    cy.get('.available-project-title').should(
      'have.class',
      'available-project-title'
    )
    // And Then
    cy.get('.available-project-title').should(
      'have.text',
      'EHU CS Students First week app'
    )
  })
})
