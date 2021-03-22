// Resolve browser inconsistencies when clicking on buttons
document.addEventListener('click', event => {
  if (event.target.matches('button')) {
    event.target.focus()
  }
})
