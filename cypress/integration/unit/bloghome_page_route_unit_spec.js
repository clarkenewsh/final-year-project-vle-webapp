/* eslint-disable no-undef */
// Testing the blog home page route - TDD unit

// // TDD Test Case Logic:
//    1. visit blog home page route url http://localhost:3000/blog
//    2. Grab the url and ensure it should includes /blog url
//    3. Get the page title head contained in the head section
//    4. Interact with the head title tag
//    5. The title should be contain the page title name 'Blog Home Page'

describe('The Blog Home Page', () => {
  it('should visit the blog home page and check its route url and head title tag', () => {
    // Given
    cy.visit('http://localhost:3000/blog')

    // When
    cy.url().should('include', '/blog')

    // Then
    cy.get('title').should('have.text', 'Blog Home Page')
  })
})
