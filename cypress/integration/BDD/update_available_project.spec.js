/* eslint-disable no-undef */
// Feature: Project Supervisor Update available project

// User Story: As a Project Supervisor, I want to update an available project, so that I can make adjustments to the content of an available project if it is subject to change.

// sneario: Project Super Updates a available project
// Given I want to update an available project
// When I click the update available project button
// Then the available project content is populated in the update project form with the Project title, project creator and project body content.

// /// // BDD Test Case Logic:
// 0.1 Admin updates a Nuxt content/availableprojects .md slug file
// 0.2 Check the nuxt content url GET request http://localhost:3000/_content/availableprojects and check the 200 status code on GET Request
// 1. Visit the page http://localhost:3000/availableprojects
// 1.1 I DONT get a 404 error code with text content 'Oops...An error occured'
// 2. Get the the available project 'project-title' from the list of availble projects
// 3. Get the .updatedAt class
// 4. Check the updatedAt tag contains the date/time of the updated availble projects

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Testing API GET, PUT Endpoints - Updating a available project', () => {
  // Functional Test
  it('Test PUT Request - updating a available project', () => {
    cy.request(
      'PUT',
      'http://localhost:3000/_content/availableprojects',
      {}
    ).then((response) => {
      expect(response.isOkStatusCode) // 0.1, 0.2
    })
  })

  // Functional Test
  it('Test GET Request - Updated available project', () => {
    cy.request('http://localhost:3000/_content/availableprojects').then(
      (response) => {
        expect(response.status).to.eq(200) // 0.4 - check 200 status code content/project examples api endpoint
      }
    )
  })

  it('Should visit the available projects page and check the updated project can be accessed and viewed', () => {
    cy.visit('http://localhost:3000/availableprojects')
    cy.get('.error-msg').should('not.exist')

    cy.get('ul li a:first').click()

    cy.url().should('include', '/availableprojects/project-bizzare')
    cy.get('.error-msg').should('not.exist')

    cy.get('.available-project-title').should(
      'have.class',
      'available-project-title'
    )

    cy.get('h1').should('contain', 'Project Bizzare')
    cy.get('.available-project-description').should(
      'have.class',
      'available-project-description'
    )
    cy.get('p.available-project-description').should(
      'contain',
      'Web Design & Development Project'
    )
    cy.get('.author').should('have.class', 'author')
    cy.get('p.author').should('contain', 'Project owner: Dave Walsh')
    cy.get('.updatedAt').should(
      'contain',
      'Project last updated: April 30, 2021'
    )
  })
})
