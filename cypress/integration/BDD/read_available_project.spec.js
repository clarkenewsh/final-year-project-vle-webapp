/* eslint-disable no-undef */
// Feature: Students Read Blog Articles

// User Story:
// sneario: Student read blog article
// Given I want to read a blog article
// When I click the blog article I want to view on the blog home page
// Then the blog article is displayed in the interface with blog article title, description, author and date updated data

// Cypress test case structure
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.

// // BDD Test Case Logic:
// 1. Visit the page http://localhost:3000/studentdashboard/dashboard
// 1.1 I dont get a 404 error code with text content 'An error occured'
// 2. Find a available project link from the list of project examples
// 3. Click it
// 3. Grab the url and ensure it should include /availableproject/available-project-1
// 3.1 I dont get a 404 error code with text content 'An error occured'
// 4. Get the h1 tag with .available-project-title class
// 5. Assert it contains the h1 text 'Available Project 1'
// 6. Get the p tag with .available-project-description class
// 7. Assert it p tag contains the text 'A description of the available project'
// 8. Get the p tag with .updatedAt class
// 9. Assert its value contains a correct date format text of month day, year
// 10. Get the p tag with .author class
// 11. Assert the p tag contains the text 'Project Supervisor'
// 12. Get the p tag with .available-project-body class
// 13. Assert the p tag includes text content
// 14. Interact with several external links contained in the project example body content
// 15. Return back to the student dashboard and select another available project

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
