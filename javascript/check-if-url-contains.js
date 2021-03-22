// check if current url contains string of text
if (window.location.href.indexOf('localhost') !== -1) { ... }

// example: use this to check whether you are on a local or production environment
// using a ternary operator to set a base url variable
let baseUrl
window.location.href.indexOf('localhost') !== -1
  ? baseUrl = 'https://localhost:3000'
  : baseUrl = 'https://production-website.com'
