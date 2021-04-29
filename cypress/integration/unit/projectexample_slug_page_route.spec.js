/* eslint-disable no-undef */
// Testing the example project slug path route url - TDD unit

// // TDD Test Case Logic:
//    1. visit dynamic page project example slug url path http://localhost:3000/projectexample/projectexample-title
//    2. Grab the url and ensure it should includes  /projectexample/projectexample-title
//    3. Get the h1 tag with .article-title class
//    5. Assert the h1 .article title class has the text 'project-example-title'
//    6. Get the h1 tag text value
//    7. h1 tag should contain 'project example title'

describe('Project example slug path url', () => {
  it('should visit a dynamic project example slug path and check its path route url and project title tag', () => {
    // Given
    cy.visit('http://localhost:3000/projectexamples/project-example-1-test')

    // When
    cy.url().should('include', '/projectexamples/project-example-1-test')

    // Then
    cy.get('.project-example-title').should(
      'have.class',
      'project-example-title'
    )
    // And Then
    cy.get('.project-example-title').should('have.text', 'Project example 1')
  })
})
