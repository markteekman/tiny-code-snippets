const elements = [...document.querySelectorAll('.element')]

// create observer
const callback = entries => {
  entries.forEach(entry => {
    // item enters viewport
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }

    // item leaves viewport
    if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
      entry.target.classList.remove('visible')
    }
  })
}

const observer = new IntersectionObserver(callback)

// observe elements
elements.forEach(element => observer.observe(element))
