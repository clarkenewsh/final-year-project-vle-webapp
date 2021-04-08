/* eslint-disable no-undef */
// Feature: Students Read Project Examples

// User Story: Aa Student, I want to view and read project examples posted by tutors to learn and understand what is required of a final year project.

// sneario: Student read project example
// Given I want to view a project example
// When I click the project example from the list of examples
// Then the project is displayed in the interface with project example title, description, author and date updated data and body content

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
// 3. Grab the url and ensure it should include /projectexamples/my-first-project-example
// 3.1 I dont get a 404 error code with text content 'An error occured'
// 4. Get the h1 tag with .projexct-example-title class
// 5. Assert it contains the h1 text 'My first project example'
// 6. Get the p tag with .project-example-description class
// 7. Assert it p tag contains the text 'A description of my first project example'
// 8. Get the p tag with .updatedAt class
// 9. Assert its value contains a correct date format text of month day, year
// 10. Get the p tag with .author class
// 11. Assert the p tag contains the text 'Tutor'
// 12. Get the p tag with .project-example-body class
// 13. Assert the p tag includes text content
// 14. Interact with several external links contained in the project example body content
// 15. Return back to the student dashboard and select another project example

// Test types here:
// - Functional
// - Acceptance
// - Integration
// - Unit

describe('Post Resource', () => {
  it('Creating a New Post', () => {
    cy.visit('/posts/new') // 1.

    cy.get('input.post-title') // 2.
      .type('My First Post') // 3.

    cy.get('input.post-body') // 4.
      .type('Hello, world!') // 5.

    cy.contains('Submit') // 6.
      .click() // 7.

    cy.url() // 8.
      .should('include', '/posts/my-first-post')

    cy.get('h1') // 9.
      .should('contain', 'My First Post')
  })
})
