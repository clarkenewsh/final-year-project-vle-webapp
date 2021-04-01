/* eslint-disable no-undef */
// Testing the blog home page route - TDD unit

// // TDD Test Case Logic:
//    1. visit blog home page route url
//    2. url chould include /blog url
//    3. Query for the head title tag
//    4. Interact with the head title tag
//    5. The title should be contain the page title

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

//  Cypress test case logic reminder
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.
