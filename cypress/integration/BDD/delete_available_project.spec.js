/* eslint-disable no-undef */
// Feature: Project Supervisor Delete Available Project

// User Story: As a Project Supervisor, I want to delete an available project, that is no longer required or relevant.

// scneario: Project Supervisor Delete available project
// Given I want to delete an available project
// When I click the delete project button
// Then the available project is deleted and removed from the list of available projects

// BDD Test Case Logic:

/// / // BDD Test Case Logic:
// 0.1 Admin deletes a Nuxt content/availableprojects .md slug file
// 0.4 Check the nuxt content url GET request http://localhost:3000/_content/availableprojects and check the 200 status code on GET Request
// 1. Visit the page http://localhost:3000/availableprojects
// 1.1 I DONT get a 404 error code with text content 'Oops..An error occured'
// 2. Check the the blog article 'adaptive-web-teaching-tool' does ot exisit in the list of project examplea

// Test types here:
// - Functional
// - Acceptance
// - Integration

describe('Testing API DELETE, GET Endpoints - Deleting a available project', () => {
  // Functional Test
  it('Test DELETE Request - creating a available project', () => {
    cy.request(
      'DELETE',
      'http://localhost:3000/_content/availableprojects/adaptive-web-teaching-tool',
      {}
    ).then((response) => {
      expect(response.isOkStatusCode) // 0.1, 0.2, 0.3
    })
  })

  // Functional Test
  it('Test GET Request - Get updated project examples', () => {
    cy.request('http://localhost:3000/_content/availableprojects').then(
      (response) => {
        expect(response.status).to.eq(200) // 0.4 - check 200 status code content/articles api endpoint
      }
    )
  })

  it('Should visit the project examples page and check the project example example was deleted from the DOM', () => {
    cy.visit('http://localhost:3000/availableprojects') // 1.
    cy.get('.error-msg').should('not.exist') // 1.1

    cy.get('ul li a:first').should('not.exist') // 2.
  })
})
