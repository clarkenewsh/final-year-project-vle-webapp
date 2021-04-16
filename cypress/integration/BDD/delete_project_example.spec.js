/* eslint-disable no-undef */
// Feature: Tutor Delete project example

// User Story: As an Tutor, I want to delete project examples that are no longer needed or so the so that the examples are always kept up to date for students. 

// scneario: Tutor Delete project example

// Given I want to delete an project example
// When I click the delete project button
// Then the available project is deleted and removed from the list of project examples

// BDD Test Case Logic:

// 1. Visit the page http://localhost:3000/projectexamples
// 1.1 I DONT get a 404 error code with text content 'An error occured'
// 2. Find a blog article link from nuxt content/projectexamples folder directory
// 3. Click delete
// 3.1 Grab and Check the nuxt content url http://localhost:3000/_content/projectexamples and check the deleted project slug is removed from project example json objects (function test)
// 4. Visit the page http://localhost:3000/projectexamples
// 4.1 I dont get a 404 error code with text content 'An error occured'
// 5. Check the project examples has been removed from the list of project examples

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
  