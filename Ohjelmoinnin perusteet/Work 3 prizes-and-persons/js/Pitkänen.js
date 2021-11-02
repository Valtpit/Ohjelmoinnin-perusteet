/*Valtteri Pitkänen
Format selection poistaa ; rivin päästä en jaksanut niitä listä,
toivottavasti ei vaikuta arviointiin. */

/*Globaalit taulukot*/
let allPrizes = []
let allPersons = []

function newPrize () {
  /*tarkistaa onko palkintoa syötetty,
    jos palkinto on syötetty, se laitetaan taulukkoon*/
  if (document.getElementById('prize').value === '') {
    document.getElementById('prizeError').innerHTML = 'Insert prize.'
  } else {
    allPrizes.push(document.getElementById('prize').value)
  }

  /*tulostetaan taulukosta palkinnot ja kerrotaan palkintojen määrä*/
  printPrizes()

  /*tyhjennetään kirjoituskenttä*/
  document.getElementById('prize').value = ''

  /*kohdistin viedään input elementtiin*/
  document.getElementById('prize').focus()
}

/*tulostetaan taulukosta palkinnot ja kerrotaan palkintojen määrä*/
function printPrizes () {
  document.getElementById('prizes').innerHTML = ''

  for (let index = 0; index < allPrizes.length; index++) {
    document.getElementById('prizes').innerHTML +=
      '<li>' + allPrizes[index] + '</li>'
  }
  document.getElementById('prizesAmount').innerHTML = allPrizes.length
}



function newPerson () {
  /*tarkistaa onko henkilöä syötetty,
    jos henkilö on syötetty, se laitetaan taulukkoon*/
  if (document.getElementById('person').value === '') {
    document.getElementById('personError').innerHTML = 'Insert person.'
  } else {
    allPersons.push(document.getElementById('person').value)
  }

  /*tulostetaan taulukosta henkilöt ja kerrotaan henkilöiden määrä*/
  printPersons()

  /*tyhjennetään kirjoituskenttä*/
  document.getElementById('person').value = ''

  /*kohdistin viedään input elementtiin*/
  document.getElementById('person').focus()
}

/*tulostetaan taulukosta palkinnot ja kerrotaan palkintojen määrä*/
function printPersons () {
  document.getElementById('persons').innerHTML = ''

  for (let index = 0; index < allPersons.length; index++) {
    document.getElementById('persons').innerHTML +=
      '<li>' + allPersons[index] + '</li>'
  }
  document.getElementById('personsAmount').innerHTML = allPersons.length
}



/*arpomis funktio*/
function RNG (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}



/*arvotaan palkinto satunnaiselle henkilölle
  tulostetaan palkinnot ja henkilöt uudelleen 
  jos palkintoja tai henkilöitä ei ole, ei arvota.*/
function toPerson () {
  if (allPrizes.length < 1) {
    alert('No more prizes')
    return
  }

  if (allPersons.length < 1) {
    alert('No more persons')
    return
  }

  document.getElementById('personAndPrice').innerHTML +=
    '<li>' +
    allPersons.pop(RNG(0, allPersons.length)) +
    ' : ' +
    allPrizes.pop(0) +
    '</li>'

  printPrizes()
  printPersons()
}
