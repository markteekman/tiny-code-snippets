// include this <script type="text/javascript" src="dist/purify.min.js"></script>
// source: https://github.com/cure53/DOMPurify

// example usage
form.addEventListener('submit', event => {
  // ...
  output.innerHTML = DOMPurify.sanitize(value)
})
