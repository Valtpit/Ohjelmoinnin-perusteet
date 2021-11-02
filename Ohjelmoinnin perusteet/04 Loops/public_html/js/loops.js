/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :Valtteri Pitkänen
 * Started date :7.2
 * Ended   date :7.2
 * 
 */

function l01 () {
  document.getElementById('first_name').innerHTML = ''
  document.getElementById('last_name').innerHTML = ''

  let firstName = document.getElementById('name1').value
  let lastName = document.getElementById('name2').value

  for (let i = 0; i < 5; i++) {
    document.getElementById('first_name').innerHTML += firstName + '<br>'
  }

  let j = 0
  while (j < 5) {
    document.getElementById('last_name').innerHTML += lastName + '<br>'
    j++
  }
}

function l02 () {
  document.getElementById('five').innerHTML = ''
  document.getElementById('six').innerHTML = ''

  for (let i = 5; i <= 50; i += 5) {
    document.getElementById('five').innerHTML += i + ' '
  }

  let j = 6
  while (j <= 60) {
    document.getElementById('six').innerHTML += j + ' '
    j += 6
  }
}

function l03 () {
  let amount = Number(document.getElementById('amount').value)
  let stars1 = document.getElementById('stars1')
  let stars2 = document.getElementById('stars2')

  document.getElementById('stars1').innerHTML = ''
  document.getElementById('stars2').innerHTML = ''

  stars1 = ''
  for (let i = 0; i < amount; i++) {
    stars1 = stars1 + '*'
    document.getElementById('stars1').innerHTML += stars1 + '<br>'
  }

  stars2 = ''
  let j = 0
  while (j < amount) {
    stars2 = stars2 + '*'
    document.getElementById('stars2').innerHTML += stars2 + '<br>'
    j++
  }
}

function l04 () {
  document.getElementById('numbers1').innerHTML = ''
  document.getElementById('numbers1').innerHTML = ''
  document.getElementById('numbers1').innerHTML = ''

  for (let i = 10; i >= -10; i--) {
    document.getElementById('numbers1').innerHTML += i + ' '
  }
  for (let i = -20; i <= 20; i += 2) {
    document.getElementById('numbers2').innerHTML += i + ' '
  }
  for (let i = 29; i >= 1; i -= 2) {
    document.getElementById('numbers3').innerHTML += i + ' '
  }
}

function l05 () {
  let min = Number(document.getElementById('min').value)
  let max = Number(document.getElementById('max').value)

  document.getElementById('divisibility3').innerHTML = ''
  document.getElementById('divisibility5').innerHTML = ''

  for (let i = min; i <= max; i++) {
    if (i % 3 === 0) {
      document.getElementById('divisibility3').innerHTML += i + ' '
    }

    if (i % 5 === 0) {
      document.getElementById('divisibility5').innerHTML += i + ' '
    }
  }
}

// copy and paste here the random number generator function
// and use it in the following functions
function RNG (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function l06 () {
  let one = 0
  let zero = 0

  for (let i = 0; i < 1000; i++) {
    let digit = RNG(0, 1)
    if (digit === 0) {
      zero++
    } else {
      one++
    }
    document.getElementById('zeros').innerHTML = zero
    document.getElementById('ones').innerHTML = one
  }
}

function l07 () {
  document.getElementById('week').innerHTML = RNG(1, 52)

  let result = ''

  for (let i = 1; i <= 7; i++) {
    result += RNG(0, 9) + ' '
  }
  document.getElementById('joker').innerHTML = result
}

function l08 () {
  let multiplier = Number(document.getElementById('multiplier').value)
  document.getElementById('table').innerHTML = ''

  let result = ''

  for (let index = 0; index <= 10; index++) {
    let amount = multiplier * index
    result += multiplier + ' * ' + index + ' = ' + amount + '<br>'
  }
  document.getElementById('table').innerHTML = result
}

function l09 () {
  const space = ';&nbsp;&nbsp;'
  document.getElementById('multiplication').innerHTML = ''

  let result = ''

  for (let index = 0; index <= 10; index++) {
    for (let j = 0; j <= 10; j++) {
      let amount = index * j
      result += index + ' * ' + j + ' = ' + amount + space
    }
    result += '<br>'
  }
  document.getElementById('multiplication').innerHTML = result
}

