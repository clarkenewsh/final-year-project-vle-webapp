/* eslint-disable no-undef */
// Feature: Students Read Blog Articles

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

// // BDD Test Case Logic:

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
// 9. Get the p tag with .updatedAt class
// 10. Assert its value contains a correct date format text of month day, year
// 11. Get the p tag with .author class
// 12. Assert the p tag contains the text 'Administrator'
// 13. Get the p tag with .article-body class
// 14. Assert the p tag includes text content

// Test types here:
// - Functional
// - Acceptance
// - Integration
// - Unit

describe('Testing API Blog Article POST Endpoints - Read a Blog Article', () => {
  // Functional Test

  // Functional Test
  it('Test GET Request - Creating a new available project', () => {
    cy.request('http://localhost:3000/_content/projectexamples').then(
      (response) => {
        expect(response.status).to.eq(200) // 0.4 - check 200 status code content/articles api endpoint
      }
    )
  })

  it('Should visit the available projects page and check the newly created available project can be accessed and viewed', () => {
    // Given
    cy.visit('http://localhost:3000/projectexamples') // 1.
    cy.get('.error-msg').should('not.exist') // 1.1

    // When
    cy.get('ul li a:first') // 2.
      .click() // 3.

    cy.url().should('include', '/projectexamples/project-example-1-test') // 4.

    cy.get('.error-msg').should('not.exist') // 4.1

    cy.get('.project-example-title').should(
      'have.class',
      'project-example-title'
    ) // 5.

    cy.get('h1').should('contain', 'Project example 1') // 6.
    cy.get('.project-example-description').should(
      'have.class',
      'project-example-description'
    ) // 7.
    cy.get('p.project-example-description').should(
      'contain',
      'A test for a project example slug'
    )
    cy.get('.author').should('have.class', 'author')
    cy.get('p.author').should('contain', 'Author: Tutor')
    cy.get('.updatedAt').should(
      'contain',
      'Project last updated: April 17, 2021'
    )
    cy.get('.project-example-body.nuxt-content').should('contain', 'p') // 13, 14
  })
})
