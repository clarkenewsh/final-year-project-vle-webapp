/* eslint-disable no-undef */
// Testing the blog home page route - TDD unit

// // TDD Test Case Logic:
//    1. visit dynamic page blog slug url path http://localhost:3000/blog/article-title
//    2. Grab the url and ensure it should includes  /blog/article-title
//    3. Get the h1 tag with .article-title class
//    5. Assert the h1 .article title class has the text 'article-title'
//    6. Get the h1 tag text value
//    7. h1 tag should contain 'project example title'

describe('Blog Article slug path url', () => {
  it('should visit a dynamic blog article slug path and check its slug path route url and blog title tag', () => {
    // Given
    cy.visit('http://localhost:3000/blog/first-blog-post-test')

    // When
    cy.url().should('include', '/blog/first-blog-post-test')

    // Then
    cy.get('.article-title').should('have.class', 'article-title')

    // And Then
    cy.get('.article-title').should('have.text', 'My first blog post')
  })
})
