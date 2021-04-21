/* eslint-disable no-undef */
// Feature: Admin Update Blog Article

// User Story: As a Student, I want to view and read project examples posted by tutors to learn and understand what is required of a final year project.

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

// 1. Visit the page http://localhost:3000/blog
// 1.1 I dont get a 404 error code with text content 'An error occured'
// 2. Find a blog article link from the list of articles
// 3. Click it
// 4. Grab the url and ensure it should include /blog/my-first-blog-post
// 4.1 I dont get a 404 error code with text content 'An error occured'
// 5. Grab the div with class .article-body
// 6. Double click the .article-body
// 7. Edit content
// 8. Click outside of .article-body section
// 9. Get the p tag with .updatedAt class
// 10. Assert the date/time format matches the date-time of the blog artice update

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
