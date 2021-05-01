// use with darkmode-toggle.html
// use with darkmode-toggle.css

// variables
let darkMode = localStorage.getItem('darkMode')
const systemPrefs = window.matchMedia('(prefers-color-scheme: dark)').matches
const darkModeToggle = document.querySelector('button')

// functions
const enableDarkMode = _ => {
  document.body.classList.add('darkmode')
  darkModeToggle.textContent = 'Disable Dark Mode'
  darkModeToggle.setAttribute('aria-pressed', 'true')
  localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = _ => {
  document.body.classList.remove('darkmode')
  darkModeToggle.textContent = 'Enable Dark Mode'
  darkModeToggle.setAttribute('aria-pressed', 'false')
  localStorage.setItem('darkMode', null)
}

// excecution
if (darkMode === 'enabled' || systemPrefs) enableDarkMode()

darkModeToggle.addEventListener('click', _ => {
  darkMode = localStorage.getItem('darkMode')

  darkMode !== 'enabled'
    ? enableDarkMode()
    : disableDarkMode()
})
