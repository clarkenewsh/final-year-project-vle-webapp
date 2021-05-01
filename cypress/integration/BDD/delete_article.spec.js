/* eslint-disable no-undef */
// Feature: Admin Delete Blog Article

// User Story: As a Admin, I want to delete an available project, that is no longer required or relevant.

// sneario: Admin deletes blog article
// Given I want to delete an blog article
// When I click the delete blog article button
// Then the blog article is deleted and removed from the list of blog articles

/// // BDD Test Case Logic:
// 0.1 Admin deletes a Nuxt content/blog .md slug file
// 0.4 Check the nuxt content url GET request http://localhost:3000/_content/articles and check the 200 status code on GET Request
// 1. Visit the page http://localhost:3000/blog
// 1.1 I DONT get a 404 error code with text content 'Opps. An error occured'
// 2. Check the the blog article 'my-first-blog-post' does ot exisit in the list of blog articles

// Test types covered:
// - Functional
// - Acceptance
// - Integration

describe('Testing API DELETE, GET Endpoints - Deleting a blog article', () => {
  // Functional Test
  it('Test DELETE Request - creating a new blog article', () => {
    cy.request(
      'DELETE',
      'http://localhost:3000/_content/articles/first-blog-post-test',
      {}
    ).then((response) => {
      expect(response.isOkStatusCode) // 0.1, 0.2, 0.3
    })
  })

  // Functional Test
  it('Test GET Request - Get updated blog articles', () => {
    cy.request('http://localhost:3000/_content/articles').then((response) => {
      expect(response.status).to.eq(200) // 0.4 - check 200 status code content/articles api endpoint
    })
  })

  it('Should visit the blog home page and check the first blog article was deleted from the DOM', () => {
    cy.visit('http://localhost:3000/blog') // 1.
    cy.get('.error-msg').should('not.exist') // 1.1

    cy.get('ul li a:first').should('not.exist') // 2.
  })
})
