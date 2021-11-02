/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

// copy and paste here the random number generator function
function RNG (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let numbers = [15, 4, 68, 23, 22, 7, 15, 10, 32, 15]

function t01a () {
  document.getElementById('result_a1').innerHTML = numbers
  document.getElementById('result_a2').innerHTML = ''

  for (let i = 0; i < numbers.length; i++) {
    document.getElementById('result_a2').innerHTML += numbers[i] + ' '
  }
}

function t01b () {
  document.getElementById('result_b').innerHTML = ''

  for (let i = 1; i < numbers.length + 1; i++) {
    document.getElementById('result_b').innerHTML +=
      numbers[numbers.length - i] + ' '
  }
}

function t01c () {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  document.getElementById('result_c1').innerHTML = sum
  document.getElementById('result_c2').innerHTML = sum / numbers.length
}

function t01d () {
  let smallest = numbers[0]
  let biggest = numbers[0]

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i]
    }
    if (numbers[i] > biggest) {
      biggest = numbers[i]
    }
  }
  document.getElementById('result_d1').innerHTML = smallest
  document.getElementById('result_d2').innerHTML = biggest
}

function t01e () {
  document.getElementById('result_e').innerHTML = ''

  numbers.sort(function (a, b) {
    return a - b
  })
  for (let i = 0; i < numbers.length; i++) {
    document.getElementById('result_e').innerHTML += numbers[i] + ' '
  }
}

function t01f () {
  numbers = new Array()

  for (let i = 0; i < 20; i++) {
    numbers.push(RNG(1, 20))
  }
  t01a()
  t01b()
  t01c()
  t01d()
  t01e()
}

function t02 () {
  document.getElementById('joker').innerHTML = ''
  let jokers = []

  for (let i = 0; i < 7; i++) {
    jokers.push(RNG(1, 9))
  }

  for (let i = 0; i < jokers.length; i++) {
    document.getElementById('joker').innerHTML += jokers[i] + ' '
  }
}

function t03 () {
  document.getElementById('lotto').innerHTML = ''
  document.getElementById('extra').innerHTML = ''
  document.getElementById('plus').innerHTML = ''

  let lotto = []

  for (let i = 0; i < 41; i++) {
    lotto.push(0)
  }

  let j = 0

  while (j < 7) {
    let num = RNG(1, 40)
    if (lotto[num] == 0) {
      lotto[num]++
    }
    j++
  }

  let l = 0

  while (l < 1) {
    let num = RNG(1, 40)
    if (lotto[num] === 0) {
      lotto[num] += 2
    }
    l++
  }

  var indices = []
  var element = 1
  var idx = lotto.indexOf(element)
  while (idx != -1) {
    indices.push(idx)
    idx = lotto.indexOf(element, idx + 1)
  }
  for (let i = 0; i < indices.length; i++) {
    document.getElementById('lotto').innerHTML += indices[i] + ' '
  }
  document.getElementById('extra').innerHTML = lotto.indexOf(2)
  document.getElementById('plus').innerHTML = RNG(1, 40)
}

function t04 () {
  document.getElementById('random').innerHTML = ''
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  while (numbers.length > 0) {
    let num = RNG(0, numbers.length - 1)

    document.getElementById('random').innerHTML += numbers[num] + ' '

    numbers.splice(num, 1)
  }
}

function t05 () {
  document.getElementById('dices').innerHTML = ''
  let dices = [
    '',
    '<img alt="dice 1" src="img/noppa1.png">',
    '<img alt="dice 2" src="img/noppa2.png">',
    '<img alt="dice 3" src="img/noppa3.png">',
    '<img alt="dice 4" src="img/noppa4.png">',
    '<img alt="dice 5" src="img/noppa5.png">',
    '<img alt="dice 6" src="img/noppa6.png">'
  ]

  let sixes = 0

  for (let i = 0; i < 100; i++) {
    let num = RNG(1, 6)
    document.getElementById('dices').innerHTML += dices[num]

    if (num === 6) {
      sixes++
    }
  }
  document.getElementById('sixes').innerHTML = sixes
}
