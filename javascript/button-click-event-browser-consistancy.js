// resolve browser inconsistencies when clicking on buttons
// source: https://zellwk.com/blog/inconsistent-button-behavior/
document.addEventListener('click', event => {
  if (event.target.matches('button')) {
    event.target.focus()
  }
})
