/* <button data-my-attribute="[one, two]"> Hello </button> */

const element = document.querySelector('[data-my-attribute]')
const elementAttribute = element.getAttribute('data-my-attribute')

const attributeArray = elementAttribute
  .replace('[', '') // remove bracket
  .replace(']', '') // remove bracket
  .split(',') // split multiple values
  .map(l => l.trim()) // trim whitespace
