/* eslint-disable no-undef */
// Feature: Students Read Blog Articles

// User Story: As a student I want to access and read available projects posted by project supervisors, so that I can formulate my own project idea and then choose a project from the list of available projects.

// sneario: Student read available project
// Given I want to access and read an available project
// When I click the view available project button
// Then the available project content is displayed with the Project name, project project creator and available project content content.

// Sad Path:
// Given I want access and read an available project has an incorrect page url
// When I click the view blog article link button
// Then the blog article is not visible
// And a feedback message

// Sad Path:
// Given I want to view the list available project when no projects have been created yet
// When I access the Student Dashboard
// Then the list of available projects is empty
// And a feedback message is displayed that ‘No available projects can be found

// // BDD Test Case Logic:
// 0.1 Check the nuxt content url GET request http://localhost:3000/_content/availableprojects and check the 200 status code on GET Request
// 1. Visit the page http://localhost:3000/studentdashboard/dashboard
// 1.1 I dont get a 404 error code with text content 'An error occured'
// 2. Get button with class .btn btn-primary available-project
// 3. Click it
// 4. Grab the url and ensure it includes http://localhost:3000/availableprojects/
// 4.1 I dont get a 404 error code with text content 'An error occured'
// 5. Find a available project from the list of project examples
// 6. Click it
// 7. Grab the url and ensure it should include /availableproject/available-project-1
// 7.1 I dont get a 404 error code with text content 'An error occured'
// 8. Get the h1 tag with .available-project-title class
// 9. Assert it contains the h1 text 'Project Title'
// 10. Get the p tag with .available-project-description class
// 11. Assert it p tag contains the text 'A description of the available project'
// 14. Get the p tag with .author class
// 15. Assert the p tag contains the text 'Project owner: 'name'
// 16. Get the p tag with .updatedAt class
// 17. Assert its value contains a correct date format text of month day, year
// 18. Get the p tag with .available-project-body class
// 19. Assert the h1 tag includes text content 'Project Brief'

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Testing API GET Endpoints - Get available projects and read and available propject slug', () => {
  // Functional Test
  it('Test GET Request - Get a new available project', () => {
    cy.request('http://localhost:3000/_content/availableprojects').then(
      (response) => {
        expect(response.status).to.eq(200) // 0.1 - check 200 status code content/availableprojects api endpoint
      }
    )
  })

  it('Should visit the student dashboard home page, locate available projects page and access an available project slug', () => {
    cy.visit('http://localhost:3000/studentdashboard/dashboard') // 1.
    cy.get('.error-msg').should('not.exist') // 1.1

    cy.get('.available-project-btn').click() // 2, 3.
    cy.url().should('include', '/availableprojects/') // 4.

    cy.get('ul li a:last') // 5.
      .click() // 6.

    cy.url().should('include', '/availableprojects/recipe-app') // 7.

    cy.get('.error-msg').should('not.exist') // 7.1

    cy.get('.available-project-title').should(
      'have.class',
      'available-project-title'
    ) // 8

    cy.get('h1').should('contain', 'Recipe app with shopping list feature') // 9.
    cy.get('.available-project-description').should(
      'have.class',
      'available-project-description'
    ) // 10.
    cy.get('p.available-project-description').should(
      'contain',
      'Web Design & Development Project'
    ) // 11.
    cy.get('.author').should('have.class', 'author') // 14.
    cy.get('p.author').should('contain', 'Project owner: Dave Walsh') // 15.
    cy.get('.updatedAt').should(
      'contain',
      'Project last updated: April 29, 2021'
    ) // 16, 17.
    cy.get('.available-project-body.nuxt-content h1').should(
      'have.text',
      'Project Brief'
    ) // 18, 19.
  })
})
