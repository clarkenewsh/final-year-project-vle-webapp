/* eslint-disable no-undef */
// Feature: Students Read Project Examples

// User Story: As an Student, I want to view and read project examples posted by tutors to learn and understand what is required of a final year project.

// sneario: Student read project example
// Given I want to view a project example
// When I click the project example from the list of examples
// Then the project is displayed in the interface with project example title, description, author and date updated data and body content

// Sad Path:
// Given I want to view a project example that can not be found
// When I click the view project example
// Then the project example does not appear on the page
// And a feedback message is displayed that ‘Project example can not be found’

// Sad Path:
// Given I want to view a project example when no project examples have been created yet
// When I access the student dashboard page
// Then the list of project examples is empty
// And a feedback message is displayed that ‘No project examples can be found’

// Cypress test case structure
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.

// // BDD Test Case Logic:
// 1. Visit the page http://localhost:3000/studentdashboard/dashboard
// 1.1 I dont get a 404 error code with text content 'An error occured'
// 2. Find a project example link from the list of project examples
// 3. Click it
// 4. Grab the url and ensure it should include /projectexamples/my-first-project-example
// 4.1 I dont get a 404 error code with text content 'An error occured'
// 5. Get the h1 tag with .projexct-example-title class
// 6. Assert it contains the h1 text 'My first project example'
// 7. Get the p tag with .project-example-description class
// 8. Assert it p tag contains the text 'A description of my first project example'
// 9. Get the p tag with .updatedAt class
// 10. Assert its value contains a correct date format text of month day, year
// 11. Get the p tag with .author class
// 12. Assert the p tag contains the text 'Tutor'
// 13. Get the p tag with .project-example-body class
// 14. Assert the p tag includes text content
// 15. Interact with several external links contained in the project example body content
// 16. Return back to the student dashboard and select another project example

// Test types here:
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
    )
    cy.get('.author').should('have.class', 'author')
    cy.get('p.author').should('have.text', 'Author: Admin')
    cy.get('.updatedAt').should(
      'contain',
      'Article last updated: April 22, 2021'
    )
    cy.get('.article-body.nuxt-content').should('contain', 'p') // 13, 14
    cy.get('.article-body.nuxt-content h3').click()
  })
})
