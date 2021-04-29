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

// // BDD Test Case Logic:
// 0.1 Check the nuxt content url GET request http://localhost:3000/_content/projectexamples and check the 200 status code on GET Request
// 1. Visit the page http://localhost:3000/studentdashboard/dashboard
// 1.1 I dont get a 404 error code with text content 'An error occured'
// 2. Get button with class .btn btn-primary available-project
// 3. Click it
// 4. Grab the url and ensure it includes http://localhost:3000/projectexamples/
// 4.1 I dont get a 404 error code with text content 'Oops..An error occured'
// 5. Find a available project from the list of project examples
// 6. Click it
// 7. Grab the url and ensure it should include /projectexamples/project-example-3
// 7.1 I dont get a 404 error code with text content 'Oops..An error occured'
// 8. Get the h1 tag with .project-example-title class
// 9. Assert it contains the h1 text 'Project Title'
// 10. Get the p tag with .project-example-description class
// 11. Assert it p tag contains the text 'A description of the project-example'
// 14. Get the p tag with .author class
// 15. Assert the p tag contains the text 'Author: 'Tutor'
// 16. Get the p tag with .updatedAt class
// 17. Assert its value contains a correct date format text of month day, year
// 18. Get the p tag with .available-project-body class
// 19. Assert the h1 tag includes text content 'Project Description'

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Testing API GET Endpoints - Get project examples and read and project examples slug', () => {
  // Functional Test
  it('Test GET Request - Get a new available project', () => {
    cy.request('http://localhost:3000/_content/projectexamples').then(
      (response) => {
        expect(response.status).to.eq(200) // 0.1 - check 200 status code content/availableprojects api endpoint
      }
    )
  })

  it('Should visit the student dashboard home page, locate available projects page and access an project examples slug', () => {
    cy.visit('http://localhost:3000/studentdashboard/dashboard') // 1.
    cy.get('.error-msg').should('not.exist') // 1.1

    cy.get('.project-example-btn').click() // 2, 3.
    cy.url().should('include', '/projectexamples/') // 4.

    cy.get('ul li a:last') // 5.
      .click() // 6.

    cy.url().should('include', '/projectexamples/project-example-3') // 7.

    cy.get('.error-msg').should('not.exist') // 7.1

    cy.get('.project-example-title').should(
      'have.class',
      'project-example-title'
    ) // 8

    cy.get('h1').should('contain', 'Project example 3') // 9.
    cy.get('.project-example-description').should(
      'have.class',
      'project-example-description'
    ) // 10.
    cy.get('p.project-example-description').should(
      'contain',
      'Testing availableproject 2'
    ) // 11.
    cy.get('.author').should('have.class', 'author') // 14.
    cy.get('p.author').should('contain', 'Author: Tutor') // 15.
    cy.get('.updatedAt').should(
      'contain',
      'Project last updated: April 17, 2021'
    ) // 16, 17.
    cy.get('.project-example-body.nuxt-content h1').should(
      'have.text',
      'Project Description'
    ) // 18, 19.
  })
})
