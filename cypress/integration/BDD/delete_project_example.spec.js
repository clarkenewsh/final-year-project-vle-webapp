/* eslint-disable no-undef */
// Feature: Tutor Delete project example

// User Story: As an Tutor, I want to delete project examples that are no longer needed or so the so that the examples are always kept up to date for students.

// scneario: Tutor Delete project example

// Given I want to delete an project example
// When I click the delete project button
// Then the available project is deleted and removed from the list of project examples

/// // BDD Test Case Logic:
// 0.1 Admin deletes a Nuxt content/projectexamples .md slug file
// 0.4 Check the nuxt content url GET request http://localhost:3000/_content/projectexamples and check the 200 status code on GET Request
// 1. Visit the page http://localhost:3000/projectexamples
// 1.1 I DONT get a 404 error code with text content 'Oops..An error occured'
// 2. Check the the blog article 'project-example-1-test' does ot exisit in the list of project examplea

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Testing API DELETE, GET Endpoints - Deleting a project example', () => {
  // Functional Test
  it('Test DELETE Request - creating a project example', () => {
    cy.request(
      'DELETE',
      'http://localhost:3000/_content/projectexamples/project-example-1-test',
      {}
    ).then((response) => {
      expect(response.isOkStatusCode) // 0.1, 0.2, 0.3
    })
  })

  // Functional Test
  it('Test GET Request - Get updated project examples', () => {
    cy.request('http://localhost:3000/_content/projectexamples').then(
      (response) => {
        expect(response.status).to.eq(200) // 0.4 - check 200 status code content/articles api endpoint
      }
    )
  })

  it('Should visit the bproject examples page and check the first project example was deleted from the DOM', () => {
    cy.visit('http://localhost:3000/projectexamples') // 1.
    cy.get('.error-msg').should('not.exist') // 1.1

    cy.get('ul li a:first').should('not.exist') // 2.
  })
})
