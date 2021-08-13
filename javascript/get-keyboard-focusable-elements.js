/**
 * Gets keyboard-focusable elements within a specified element
 * @param {HTMLElement} [element=document] element
 * @returns {Array}
 */
function getKeyboardFocusableElements (element = document) {
  return [...element.querySelectorAll(
    'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
  )]
    .filter(el => !el.hasAttribute('disabled'))
}
