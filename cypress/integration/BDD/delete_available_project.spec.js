/* eslint-disable no-undef */
// Feature: Project Supervisor Delete Available Project

// User Story: As a Project Supervisor, I want to delete an available project, that is no longer required or relevant.

// scneario: Project Supervisor Delete available project
// Given I want to delete an available project
// When I click the delete project button
// Then the available project is deleted and removed from the list of available projects

// BDD Test Case Logic:

// 1. Visit the page http://localhost:3000/availableprojects
// 1.1 I DONT get a 404 error code with text content 'An error occured'
// 2. Find a blog article link from nuxt content/availableprojects folder directory
// 3. Click delete
// 3.1 Grab and Check the nuxt content url http://localhost:3000/_content/availableprojects and check the deleted project slug is removed from available projects json objects (function test)
// 4. Visit the page http://localhost:3000/availableprojects
// 4.1 I dont get a 404 error code with text content 'An error occured'
// 5. Check the available project has been removed from the list of available project

// Test types here:
// - Functional
// - Acceptance
// - Integration
// - Unit

// Cypress test case structure
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.

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
