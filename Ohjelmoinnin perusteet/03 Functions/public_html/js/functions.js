/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

let whatShape = 1
/**
 * What is selected, circle or square?
 * @param {number} i    1 = circle, 2 = square
 */
function shape (i) {
  whatShape = i
  document.getElementById('result').innerHTML = ''
}

/**
 * Print result on the page
 * @param {element} place   where to print
 * @param {string} shape    shape as text
 * @param {number} area     area of the shape
 * @param {number} around   around of the shape
 */
function print (place, shape, area, around) {
  place.innerHTML = shape + ' area is ' + area + ', around is ' + around + '.'
}

/**
 * Calculate circle around
 * @param {number} r    radius of a circle
 * @returns {number}    around of a circle
 */
function calculateCirleAround (r) {
  return 2 * Math.PI * r
}

/**
 * Calculate circle area
 * @param {number} r    radius of a circle
 * @returns {number}    area of a circle
 */
function calculateCirleArea (r) {
  return Math.PI * Math.pow(r, 2)
}

// Write Square functions here
function calculateSquareAround (s) {
  return s * 4
}

function calculateSquareArea (s) {
  return s * s
}

// Paste here the random number generator function
function RNG (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Button functions
function f01 () {
  let radius = document.getElementById('radius1').value

  let around = Math.round(calculateCirleAround(radius))
  let area = Math.round(calculateCirleArea(radius))

  document.getElementById('c_around').innerHTML = Math.round(around)
  document.getElementById('c_area').innerHTML = Math.round(area)
}

function f02 () {
  let side = Number(document.getElementById('side').value)
  let bottom = Number(document.getElementById('bottom').value)
  let bottom2 = bottom / 2
  let height = Math.sqrt(Math.pow(side, 2) - Math.pow(bottom2, 2))
  let around = bottom + side + side
  let area = bottom2 * height

  document.getElementById('t_height').innerHTML = Math.round(height)
  document.getElementById('t_around').innerHTML = Math.round(around)
  document.getElementById('t_area').innerHTML = Math.round(area)
}

function f03 () {
  let radius = document.getElementById('radius2').value
  let around = Math.round(calculateCirleAround(radius))
  let area = Math.round(calculateCirleArea(radius))
  let place = document.getElementById('circle')
  print(place, 'Circle:', area, around)
}

function f04 () {
  let side = Number(document.getElementById('side2').value)
  let around = calculateSquareAround(side)
  let area = calculateSquareArea(side)
  let place = document.getElementById('square')
  print(place, 'Square:', area, around)
}

function f05 () {
  let amount = Number(document.getElementById('amount').value)
  if (whatShape === 2) {
    let around = calculateSquareAround(amount)
    let area = calculateSquareArea(amount)
    let place = document.getElementById('result')
    print(place, 'Square:', area, around)
  } else {
    let around = Math.round(calculateCirleAround(amount))
    let area = Math.round(calculateCirleArea(amount))
    let place = document.getElementById('result')
    print(place, 'Circle:', area, around)
  }
}

function f06 () {
  document.getElementById('dice').innerHTML = RNG(1,6)
}

function f07 () {
  let min = Number(document.getElementById('min').value)
  let max = Number(document.getElementById('max').value)
  
  document.getElementById('randoms').innerHTML += RNG(min, max) + ' '
}

// Write getCharacter and getDigit functions here
function getCharacter (text, index, uppercase) {
  txt = text
  if (uppercase == true) {
    return txt[index].toUpperCase()
  } else {
    return txt[index].toLowerCase()
  }
}

function getDigit () {
  let today = new Date()
  let current_year = today.getFullYear()
  let year = current_year.toString()

  return year[3]
}

function f08 () {
  // write here the user id and password by hand to have an example of
  // the desired result of the task, use your own name
  // first name:  Valtteri
  // last name:  Pitkänen
  // user id: n1vapi00
  // password: !?vIpNE+/2

  let firstName = document.getElementById('firstName').value
  let lastName = document.getElementById('lastName').value
  let lenght1 = firstName.length
  let lenght2 = lastName.length

  let id1 = getCharacter(firstName, 0, false)
  let id2 = getCharacter(firstName, 1, false)
  let id3 = getCharacter(lastName, 0, false)
  let id4 = getCharacter(lastName, 1, false)
  let year = Number(getDigit())

  let id5 = getCharacter(firstName, lenght1 - 1, true)
  let id6 = getCharacter(lastName, lenght2 - 1, true)
  let id7 = getCharacter(lastName, lenght2 - 2, true)

  document.getElementById('userid').innerHTML =
    'n' + year + id1 + id2 + id3 + id4 + '00'
  document.getElementById('password').innerHTML =
    '!?' + id1 + id5 + id3 + id6 + id7 + '+/' + (year + 1)
}

// Write checkDate and luckyNumber functions here
function checkDate (day, month, year) {
  let message = ''

  if (day < 0 || day > 31) {
    message = 'Day must be 1-31.'
  }

  if (month < 0 || month > 12) {
    message = 'Month must be 1-12.'
  }

  let today = new Date().getFullYear()

  if (year < 1900 || year > today) {
    message = 'Year must be between 1900 and current year.'
  }
  return message
}

function luckyNumber (day, month, year) {
  const LUCKY = '2468013579'
  let sum = (day + month + year) % 10
  return LUCKY.charAt(sum)
}

function f09 () {
  document.getElementById('check_error').innerHTML = ''
  document.getElementById('check_result').innerHTML = ''

  let day = Number(document.getElementById('dd').value)
  let month = Number(document.getElementById('mm').value)
  let year = Number(document.getElementById('yy').value)

  let message = checkDate(day, month, year)
  if (message !== '') {
    document.getElementById('check_error').innerHTML = message
    return
  }

  let number = luckyNumber(day, month, year)
  let today = new Date()
  let current_year = today.getFullYear()
  let age = current_year - year
  document.getElementById('check_result').innerHTML =
    'Your date is right and your are ' +
    age +
    ' years old.' +
    '<br>' +
    'Your lucky number is ' +
    number
}
