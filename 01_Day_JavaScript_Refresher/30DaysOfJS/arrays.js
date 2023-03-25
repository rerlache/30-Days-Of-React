// reference: https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md
// Arrays can have multiple datatypes:
const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
  ] // arr containing different data types
  console.log(arr)

  // we can split a string at different positions, and we can change to an array.
  // Let us see the examples below
  let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

// Access specific items in an array
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]

console.log(lastFruit) // lemon

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // set of numbers

console.log(numbers.length) // => to know the size of the array, which is 6
console.log(numbers) // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]) //  -> 0
console.log(numbers[5]) //  -> 100

let lastIndex1 = numbers.length - 1
console.log(numbers[lastIndex1]) // -> 100

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ] // List of web technologies
  
  console.log(webTechs) // all the array items
  console.log(webTechs.length) // => to know the size of the array, which is 7
  console.log(webTechs[0]) //  -> HTML
  console.log(webTechs[6]) //  -> MongoDB
  
  let lastIndex2 = webTechs.length - 1
  console.log(webTechs[lastIndex2]) // -> MongoDB

const pushPopNumbers = [1, 2, 3, 4, 5]
pushPopNumbers.push(6)

console.log(pushPopNumbers) // -> [1,2,3,4,5,6]

pushPopNumbers.pop() // -> remove one item from the end
console.log(pushPopNumbers) // -> [1,2,3,4,5]

const shiftNumbers = [1, 2, 3, 4, 5]
shiftNumbers.shift() // -> remove one item from the beginning

console.log(shiftNumbers) // -> [2,3,4,5]
shiftNumbers.unshift(0)

console.log(shiftNumbers)

numbers.reverse()
console.log(numbers)
numbers.reverse()
console.log(numbers)

const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
]
console.log(arrayOfArray[0]) // [1, 2, 3]

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length) // 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]