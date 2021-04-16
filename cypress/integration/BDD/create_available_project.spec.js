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
// 2. Find a project link from the list of available projects
// 3. Click it
// 4. Grab the url and ensure it should include /availableprojects/project-title
// 4.1 I dont get a 404 error code with text content 'An error occured'
// 5. Get the h1 tag with .availableproject-title class
// 6. Assert it contains the h1 text 'title-availableproject'
// 7. Get the p tag with .availableproject-description class
// 8. Assert it p tag contains the text 'A description of my first available project'
// 9. Get the p tag with .updatedAt class
// 10. Assert its value contains a correct date format text of month day, year
// 11. Get the p tag with .author class
// 12. Assert the p tag contains the text 'Project Supervisor'
// 13. Get the p tag with .availableproject-body class
// 14. Assert the p tag includes text content

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
