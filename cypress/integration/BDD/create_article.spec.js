/* eslint-disable no-undef */
// Feature: Create Blog Articles

// User Story: As a system Admin, I want to create blog articles, so that they can be accessed and viewed by students to learn about final year projects.

// sneario: Admin creates blog article
// Given I want to create a blog article
// When I click the blog article I want to view on the blog home page
// Then the blog article is displayed in the interface with blog article title, description, author and date updated body content data

// // BDD Test Case Logic:
// 0.1 Admin creates a new Nuxt content/blog .md slug file
// 0.2 Admin completes the title, description, img, alt and author fields
// 0.3 Admin completes the body content of the blog slug article
// 0.4 Check the nuxt content url GET request http://localhost:3000/_content/articles and check the 200 status code on GET Request
// 1. Visit the page http://localhost:3000/blog
// 1.1 I DONT get a 404 error code with text content 'An error occured'
// 2. Find a blog article link from the list of articles
// 3. Click it
// 4. Grab the url and ensure it should include /blog/my-first-blog-post
// 4.1 I dont get a 404 error code with text content 'An error occured'
// 5. Get the h1 tag with .article-title class
// 6. Assert it contains the h1 text 'my-first-blog-post'
// 7. Get the p tag with .article-description class
// 8. Assert it p tag contains the text 'A description of my first blog post'
// 9. Get the p tag with .updatedAt class
// 10. Assert its value contains a correct date format text of month day, year
// 11. Get the p tag with .author class
// 12. Assert the p tag contains the text 'Admini'
// 13. Get the p tag with .article-body class
// 14. Assert the p tag includes text content

// Test types covered:
// - Functional
// - Acceptance
// - Integration

describe('Testing API GET, POST Endpoints - Creating a new blog article', () => {
  // Functional Test
  it('Test POST Request - creating a new blog article', () => {
    cy.request('POST', 'http://localhost:3000/_content/articles', {}).then(
      (response) => {
        expect(response.isOkStatusCode) // 0.1, 0.2, 0.3
      }
    )
  })

  // Functional Test
  it('Test GET Request - Creating a new blog article', () => {
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
    cy.get('.article-body.nuxt-content').should('contain', 'p') // 13, 14
  })
})
