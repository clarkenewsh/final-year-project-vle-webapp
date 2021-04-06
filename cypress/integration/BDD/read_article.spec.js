// Feature: Students Read Blog Articles

// Acceptance Criteria:

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

// 1. Visit the page http://localhost:3000/blog
// 2. Find a blog article link from the list of articles
// 3. Click it
// 3. Grab the url and ensure it should include /blog/my-first-blog-post
// 4. Get the h1 tag with .article-title class
// 5. Assert it contains the h1 text 'my-first-blog-post'
// 6. Get the p tag with .article-description class
// 7. Assert it h1 tag contains the text 'A description of my first blog post'
// 8. Get the p tag with .updatedAt class
// 9. Assert its value contains a correct date format text of month day, year
// 10. Get the p tag with .author class
// 11. Assert the p tag contains the text 'Administrator'
// 12. Get the p tag with .article-body class
// 13. Assert the p tag includes text content

// Test types here:
// - Functional
// - Acceptance
// - Integration
// - Unit

// Cyress test here

// ************************************************************************
// SNIPPET FROM CYPRESS WEBSITE HERE WITH SIMULAR EXAMPLE TO CREATE BLOG
// ************************************************************************
// Visit the page at /posts/new.
// Find the <input> with class post-title.
// Type "My First Post" into it.
// Find the <input> with class post-body.
// Type "Hello, world!" into it.
// Find the element containing the text Submit.
// Click it.
// Grab the browser URL, ensure it includes /posts/my-first-post.
// Find the h1 tag, ensure it contains the text "My First Post".


// describe('Post Resource', () => {
//     it('Creating a New Post', () => {
//       cy.visit('/posts/new') // 1.
  
//       cy.get('input.post-title') // 2.
//         .type('My First Post') // 3.
  
//       cy.get('input.post-body') // 4.
//         .type('Hello, world!') // 5.
  
//       cy.contains('Submit') // 6.
//         .click() // 7.
  
//       cy.url() // 8.
//         .should('include', '/posts/my-first-post')
  
//       cy.get('h1') // 9.
//         .should('contain', 'My First Post')
//     })
//   })