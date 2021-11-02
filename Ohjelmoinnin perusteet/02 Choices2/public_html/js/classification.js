/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name : Vallteri Pitkänen
 * Started date : 21.1
 * Ended   date : 21.1
 * 
 */

function v10 () {
  const ERROR = 'Points should be between 0 - 60.'

  document.getElementById('grade').innerHTML =""
  document.getElementById('grade_error').innerHTML =""

  let points = Number(document.getElementById('points').value)

  if (points < 0 || points > 60) {
    document.getElementById('grade_error').innerHTML = ERROR
    return
  }

  if (points <= 29) {
    document.getElementById('grade').innerHTML = 'fail'
  } else if (points <= 34) {
    document.getElementById('grade').innerHTML = 'satisfactory'
  } else if (points <= 39) {
    document.getElementById('grade').innerHTML = 'fair'
  } else if (points <= 49) {
    document.getElementById('grade').innerHTML = 'good'
  } else {
    document.getElementById('grade').innerHTML = 'excellent'
  }
}

function v11 () {
  const ERROR = 'Hours should be between 0 - 24.'

  let time = Number(document.getElementById('clock').value)

  document.getElementById('greeting').innerHTML =""
  document.getElementById('clock_error').innerHTML =""

  if (time < 0 || time > 24) {
    document.getElementById('clock_error').innerHTML = ERROR
    return
  }

  if (time <= 3) {
    document.getElementById('greeting').innerHTML = 'Good night'
  } else if (time <= 11) {
    document.getElementById('greeting').innerHTML = 'Good morning'
  } else if (time <= 17) {
    document.getElementById('greeting').innerHTML = 'Good afternoon'
  } else if (time <= 20) {
    document.getElementById('greeting').innerHTML = 'Good evening'
  } else {
    document.getElementById('greeting').innerHTML = 'Good night'
  }
}

function v12 () {
  const ERROR_NEG = 'Number of guests cannot be negative.'
  const ERROR_DIGIT = 'Number of guests must be integer.'
  const ERROR_FEW = 'Party is cancelled due to too few guests.'

  const ADDRESS1 = 'Naapuritie 1'
  const ADDRESS2 = 'Naapuritie 12'
  const ADDRESS3 = 'Juhlasalintie 34'

  document.getElementById('shopping_list').innerHTML = ''
  document.getElementById('address').innerHTML = ''
  document.getElementById('party_error').innerHTML = ''

  let sausages = 0
  let drinks = 0
  let tomatoes = 0
  let eggs = 0

  let amount = Number(document.getElementById('guests').value)

  if (amount < 0) {
    document.getElementById('party_error').innerHTML = ERROR_NEG
    return
  }
  if (Number.isInteger(amount) == false) {
    document.getElementById('party_error').innerHTML = ERROR_DIGIT
    return
  }
  if (amount < 3) {
    document.getElementById('party_error').innerHTML = ERROR_FEW
    return
  }

  if (amount < 15) {
    document.getElementById('address').innerHTML = ADDRESS1
    sausages = amount * 3
    drinks = amount * 5
    tomatoes = amount * 2
    eggs = amount
  } else {
    sausages = amount * 2
    drinks = amount * 3
    tomatoes = amount
    eggs = amount * 0.5

    if (amount <= 50) {
      document.getElementById('address').innerHTML = ADDRESS2
    } else {
      document.getElementById('address').innerHTML = ADDRESS3
    }
  }

  document.getElementById('shopping_list').innerHTML =
    'Shopping list: <br>' +
    '- Sausages ' + sausages + ' pcs<br>' +
    '- Drinks ' + drinks + ' bottles<br>' +
    '- Tomatoes ' + tomatoes + ' pcs<br>' +
    '- Eggs ' + eggs + ' pcs'
}

function v13 () {
  const ERROR =
    'Number of right answers cannot be bigger than number of questions.'
  const RES1 = 'Less than 25% right, you should study more.<br>'
  const RES2 = 'Less than 50% right, nearly passed.<br>'
  const RES3 = 'More than 50% right, good work.<br>'
  const RES4 = 'More than 75% right, excellent.<br>'

  const prize1 = '<img src="img/prize1.png">'
  const prize2 = '<img src="img/prize2.png">'
  const prize3 = '<img src="img/prize3.png">'
  const prize4 = '<img src="img/prize4.png">'

  document.getElementById('quiz_error').innerHTML = ''
  document.getElementById('result').innerHTML = ''

  let question = Number(document.getElementById('amount').value)
  let answer = Number(document.getElementById('right').value)

  if (question < answer) {
    document.getElementById('quiz_error').innerHTML = ERROR
    return
  }

  var grade = answer / question

  if (grade < 0.25) {
    document.getElementById('result').innerHTML = RES1 + prize1
  } else if (grade < 0.5) {
    document.getElementById('result').innerHTML = RES2 + prize2
  } else if (grade < 0.75) {
    document.getElementById('result').innerHTML = RES3 + prize3
  } else {
    document.getElementById('result').innerHTML = RES4 + prize4
  }
}
