function shuffleArray (originalArray) {
  let array = [].concat(originalArray)
  let currentIndex = array.length, temporaryValue, randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array;
}

const languages = [
  'astro',
  'react',
  'vue',
  'typescript',
  'javascript',
  'django',
  'wordpress',
  'php',
  'python',
]

const langaugegRowOne = shuffleArray(languages)
const langaugegRowTwo = shuffleArray(languages)
const langaugegRowThree = shuffleArray(languages)
