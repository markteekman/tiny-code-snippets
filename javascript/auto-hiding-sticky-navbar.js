const nav = document.querySelector('header')
const navHeight = nav.getBoundingClientRect().height

let prevScrollPos = window.scrollY
window.addEventListener('scroll', event => {
  const scrollPos = window.scrollY
  const difference = scrollPos - prevScrollPos
  const currentNavTop = parseFloat(getComputedStyle(nav).top)

  if (scrollPos > prevScrollPos) {
    const navTopValue = Math.abs(currentNavTop - difference)
    if (navTopValue > navHeight) {
      nav.style.top = `-${navHeight}px`
    } else {
      nav.style.top = `-${navTopValue}px`
    }
  } else {
    const navTopValue = currentNavTop - difference
    if (navTopValue > 0) {
      nav.style.top = '0px'
    } else {
      nav.style.top = `${navTopValue}px`
    }
  }

  prevScrollPos = scrollPos
})
