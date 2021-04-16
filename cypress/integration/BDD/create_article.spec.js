/* eslint-disable no-undef */
// Feature: Create Blog Articles

// User Story: As a system Admin, I want to create blog articles, so that they can be accessed and viewed by students to learn about final year projects.
// sneario: Admin creates blog article
// Given I want to create a blog article
// When I click the blog article I want to view on the blog home page
// Then the blog article is displayed in the interface with blog article title, description, author and date updated body content data

// // BDD Test Case Logic:
// 0.1 Admin creates a new Nuxt content/blog .md slug file
// 0.2 Admin completes the title, description, img, alt and author fields
// 0.3 Admin completes the body content of the blog slug article
// 0.4 Check the nuxt content url http://localhost:3000/_content/articles and check the new blog article slug title is visible as a json object (functional test)
// 1. Visit the page http://localhost:3000/blog
// 1.1 I DONT get a 404 error code with text content 'An error occured'
// 2. Find a blog article link from the list of articles
// 3. Click it
// 4. Grab the url and ensure it should include /blog/my-first-blog-post
// 4.1 I dont get a 404 error code with text content 'An error occured'
// 5. Get the h1 tag with .article-title class
// 6. Assert it contains the h1 text 'my-first-blog-post'
// 7. Get the p tag with .article-description class
// 8. Assert it p tag contains the text 'A description of my first blog post'
// 9. Get the p tag with .updatedAt class
// 10. Assert its value contains a correct date format text of month day, year
// 11. Get the p tag with .author class
// 12. Assert the p tag contains the text 'Administrator'
// 13. Get the p tag with .article-body class
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
