// shows the currenlty focused element on the page when tabbing through focusable elements
window.addEventListener('keyup', event => {
  if (event.key !== 'Tab') return
  const hasCurrentFocus = document.activeElement
  console.log(hasCurrentFocus)
})
