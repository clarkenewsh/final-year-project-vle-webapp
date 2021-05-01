/* eslint-disable no-undef */
// Feature: Tutor Update project example

// User Story: As a Tutor, I want to update existing project examples, so that they can always be up to date and contain relevant information.

// sneario: Tutor Update project example
// Given I want to update an Project examples
// When I click the update Project examples button
// Then the available project content is populated in the update project form with the Project title, project creator and project body content.

/// // BDD Test Case Logic:
// 0.1 Admin updates a Nuxt content/projectexamples .md slug file
// 0.4 Check the nuxt content url GET request http://localhost:3000/_content/projectexamples and check the 200 status code on GET Request
// 1. Visit the page http://localhost:3000/projectexamples
// 1.1 I DONT get a 404 error code with text content 'Ooops..An error occured'
// 2. Get the the project examples 'project-title' from the list of availble projects
// 3. Get the .updatedAt class
// 4. Check the updatedAt tag contains the date/time of the updated project examples

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Testing API GET, PUT Endpoints - Updating project example', () => {
  // Functional Test
  it('Test PUT Request - updating a project example', () => {
    cy.request(
      'PUT',
      'http://localhost:3000/_content/projectexamples',
      {}
    ).then((response) => {
      expect(response.isOkStatusCode) // 0.1, 0.2, 0.3
    })
  })

  // Functional Test
  it('Test GET Request - Updated project examples', () => {
    cy.request('http://localhost:3000/_content/projectexamples').then(
      (response) => {
        expect(response.status).to.eq(200) // 0.4 - check 200 status code content/project examples api endpoint
      }
    )
  })

  it('Should visit the project examples page and check the updated project can be accessed and viewed', () => {
    cy.visit('http://localhost:3000/projectexamples')
    cy.get('.error-msg').should('not.exist')

    cy.get('ul li a:first').click()

    cy.url().should('include', '/projectexamples/project-example-1-test')

    cy.get('.error-msg').should('not.exist')

    cy.get('.project-example-title').should(
      'have.class',
      'project-example-title'
    )

    cy.get('h1').should('contain', 'Project example 1')
    cy.get('.project-example-description').should(
      'have.class',
      'project-example-description'
    )
    cy.get('p.project-example-description').should(
      'contain',
      'A test for a project example slug'
    )
    cy.get('.author').should('have.class', 'author')
    cy.get('p.author').should('contain', 'Author: Tutor')
    cy.get('.updatedAt').should(
      'contain',
      'Project last updated: April 30, 2021'
    )
  })
})
