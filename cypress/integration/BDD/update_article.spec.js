/* eslint-disable no-undef */
// Feature: Admin Update Blog Article

// User Story: As a Student, I want to view and read project examples posted by tutors to learn and understand what is required of a final year project.

// sneario: Student read blog article
// Given I want to read a blog article
// When I click the blog article I want to view on the blog home page
// Then the blog article is displayed in the interface with blog article title, description, author and date updated data

// Cypress test case structure
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.

/// // BDD Test Case Logic:
// 0.1 Admin updates a Nuxt content/blog .md slug file
// 0.4 Check the nuxt content url GET request http://localhost:3000/_content/articles and check the 200 status code on GET Request
// 1. Visit the page http://localhost:3000/blog
// 1.1 I DONT get a 404 error code with text content 'An error occured'
// 2. Get the the blog article 'my-first-blog-post' from the list of blog articles
// 3. Get the .updatedAt class
// 4. Check the updatedAt tag contains the date/time of the updated blog article

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Testing API GET, PUT Endpoints - Updating a blog article', () => {
  // Functional Test
  it('Test PUT Request - updating a new blog article', () => {
    cy.request('PUT', 'http://localhost:3000/_content/articles', {}).then(
      (response) => {
        expect(response.isOkStatusCode) // 0.1, 0.2, 0.3
      }
    )
  })

  // Functional Test
  it('Test GET Request - Updated blog article', () => {
    cy.request('http://localhost:3000/_content/articles').then((response) => {
      expect(response.status).to.eq(200) // 0.4 - check 200 status code content/articles api endpoint
    })
  })

  it('Should visit the blog home page and check the newly created blog article can be accessed and viewed', () => {
    // Given
    cy.visit('http://localhost:3000/blog') // 1.
    cy.get('.error-msg').should('not.exist') // 1.1

    // When
    cy.get('ul li a:first') // 2.
      .click() // 3.

    cy.url().should('include', '/blog/first-blog-post-test') // 4.

    cy.get('.error-msg').should('not.exist') // 4.1

    cy.get('.article-title').should('have.class', 'article-title') // 5.

    cy.get('h1').should('contain', 'My first blog post') // 6.
    cy.get('.article-description').should('have.class', 'article-description') // 7.
    cy.get('p.article-description').should(
      'have.text',
      'Learning how to use @nuxt/content to create a blog test'
    )
    cy.get('.author').should('have.class', 'author')
    cy.get('p.author').should('have.text', 'Author: Admin')
    cy.get('.updatedAt').should(
      'contain',
      'Article last updated: April 30, 2021'
    )
  })
})
