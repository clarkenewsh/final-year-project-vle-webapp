/* eslint-disable no-undef */
// Feature: Students Read Blog Articles

// User Story: As a Student, I want to view and read project examples posted by tutors to learn and understand what is required of a final year project.

// sneario: Student read blog article
// Given I want to read a blog article
// When I click the blog article I want to view on the blog home page
// Then the blog article is displayed in the interface with blog article title, description, author and date updated data

// // BDD Test Case Logic:
// 0.1 Check the nuxt content url GET request http://localhost:3000/_content/articles and check the 200 status code on GET Request
// 1. Visit the page http://localhost:3000/blog
// 1.1 I dont get a 404 error code with text content 'An error occured'
// 2. Find a blog article link from the list of articles
// 3. Click it
// 4. Grab the url and ensure it should include /blog/my-first-blog-post
// 4.1 I dont get a 404 error code with text content 'An error occured'
// 5. Get the h1 tag with .article-title class
// 6. Assert it contains the h1 text 'my-first-blog-post'
// 7. Get the p tag with .article-description class
// 8. Assert it p tag contains the text 'A description of my first blog post'
// 9. Get the p tag with .author class
// 10. Assert the p tag contains the text 'Administrator'
// 11. Get the p tag with .updatedAt class
// 12. Assert its value contains a correct date format text of month day, year
// 13. Get the p tag with .article-body class
// 14. Assert the p tag includes text content

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Testing API GET Endpoints - Get a new blog article', () => {
  // Functional Test
  it('Test GET Request - get a new blog article', () => {
    cy.request('http://localhost:3000/_content/articles').then((response) => {
      expect(response.status).to.eq(200) // 0.4 - check 200 status code content/articles api endpoint
    })
  })

  it('Should visit the blog home page and check a blog article can be accessed and viewed', () => {
    cy.visit('http://localhost:3000/blog') // 1.
    cy.get('.error-msg').should('not.exist') // 1.1

    cy.get('ul li a:last') // 2.
      .click() // 3.

    cy.url().should('include', '/blog/remember-the-research') // 4.

    cy.get('.error-msg').should('not.exist') // 4.1

    cy.get('.article-title').should('have.class', 'article-title') // 5.

    cy.get('h1').should('contain', 'Remember the Research') // 6.
    cy.get('.article-description').should('have.class', 'article-description') // 7.
    cy.get('p.article-description').should(
      'have.text',
      'Learn how to think as a Compouter Scienetist and understabnd that Computer Science undergraduate projects are not all about the build and coding.'
    ) // 8.
    cy.get('.author').should('have.class', 'author') // 9.
    cy.get('p.author').should('have.text', 'Author: Admin') // 10.
    cy.get('.updatedAt').should(
      'contain',
      'Article last updated: April 30, 2021'
    ) // 11, 12
    cy.get('.article-body.nuxt-content').should('contain', 'p') // 13, 14
  })
})
