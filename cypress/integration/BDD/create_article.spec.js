// Feature: Students Blog Articles

// Acceptance Criteria:

// User Story:
// sneario: Students reads blog article
// Given
// When
// Then

//  Cypress test case structure
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.

// // BDD Test Case Logic:

// 1. Visit the page /blog/index
// 2.

// 1. visit services page URL
// 2. Find/query the div tag with class "service-card"
// 2. Interact with the h2 tag
// 3. The h2 tag tite should contain 'Dog Walking'
// repeat the same process for the other two service cards
// 1. visit services page URL
// 2. Find the button tag with class 'btn' with a tag text 'Book now'
// 3. Click it
// 4. Grab the browser URL, ensure it includes /contact

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