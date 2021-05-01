/* eslint-disable no-undef */
// Feature: Project Supervisor Create Available Project

// User Story: As a Project Supervisor, I want to create an available project, that can be accessed and viewed by students.

// sneario: Project Supervisor Create available project
// Given I want to create an available project
// When I click the view project example button
// Then the project example content is displayed with the Project title, project creator and project body content.

// // BDD Test Case Logic:
// 0.1 Project Supervisor creates a new Nuxt content/availableproject .md slug file
// 0.2 Project Supervisor completes the title, description, img, alt and author fields
// 0.3 Project Supervisor completes the body content of the available project slug
// 0.4 Check the nuxt content url http://localhost:3000/_content/availableprojects and check the first object that the new project slug is visible as a json object (functional test)
// 1. Visit the page http://localhost:3000/staffdashboard/availableprojects
// 1.1 I DONT get a 404 error code with text content 'An error occured'
// 2. Get the
// 2. Find a project link from the list of available projects
// 3. Click it
// 4. Grab the url and ensure it should include /availableprojects/project-title
// 4.1 I dont get a 404 error code with text content 'OOps..An error occured'
// 5. Get the h1 tag with .availableproject-title class
// 6. Assert it contains the h1 text 'title-availableproject'
// 7. Get the p tag with .availableproject-description class
// 8. Assert it p tag contains the text 'A description of my first available project'
// 9. Get the p tag with .author class
// 10. Assert the p tag contains the text 'Project Supervisor'
// 11. Get the p tag with .updatedAt class
// 12. Assert its value contains a correct date format text of month day, year
// 13. Get the p tag with .availableproject-body class
// 14. Assert the p tag includes text content

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Testing API GET, POST Endpoints - Creating a new available project', () => {
  // Functional Test
  it('Test POST Request - Creating a new available project', () => {
    cy.request(
      'POST',
      'http://localhost:3000/_content/availableprojects',
      {}
    ).then((response) => {
      expect(response.isOkStatusCode) // 0.1, 0.2, 0.3
    })
  })

  // Functional Test
  it('Test GET Request - Creating a new available project', () => {
    cy.request('http://localhost:3000/_content/availableprojects').then(
      (response) => {
        expect(response.status).to.eq(200) // 0.4 - check 200 status code content/articles api endpoint
      }
    )
  })

  it('Should visit the available projects page and check the newly created available project can be accessed and viewed', () => {
    cy.visit('http://localhost:3000/availableprojects') // 1.
    cy.get('.error-msg').should('not.exist') // 1.1

    cy.get('ul li a:first') // 2.
      .click() // 3.

    cy.url().should('include', '/availableprojects/project-bizzare') // 4.

    cy.get('.error-msg').should('not.exist') // 4.1

    cy.get('.available-project-title').should(
      'have.class',
      'available-project-title'
    ) // 5.

    cy.get('h1').should('contain', 'Project Bizzare') // 6.
    cy.get('.available-project-description').should(
      'have.class',
      'available-project-description'
    ) // 7.
    cy.get('p.available-project-description').should(
      'contain',
      'Web Design & Development Project'
    )// 8.
    cy.get('.author').should('have.class', 'author') // 9.
    cy.get('p.author').should('contain', 'Project owner: Dave Walsh') // 10.
    cy.get('.updatedAt').should(
      'contain',
      'Project last updated: April 30, 2021'
    ) // 11, 12
    cy.get('.available-project-body.nuxt-content').should('contain', 'p') // 13, 14
  })
})
