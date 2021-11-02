/* Valtteri Pitkänen 3.3.2021 */

/* Ajoneuvotehtävä 
******************** */
function tankille () {
  if (document.getElementById('tankki').checked == true) {
    document.getElementById('ttankille').classList.remove('piilossa')
  } else {
    document.getElementById('ttankille').classList.add('piilossa')
  }
  tyhjennä()
}

function toimintasäde () {
  if (document.getElementById('toimsäde').checked == true) {
    document.getElementById('tsäde').classList.remove('piilossa')
  } else {
    document.getElementById('tsäde').classList.add('piilossa')
  }
  tyhjennä()
}

function tyhjennä () {
  document.getElementById('tankilletulos').innerHTML = ''
  document.getElementById('sädetulos').innerHTML = ''
  document.getElementById('autovirhe').innerHTML = ''
}

const VALINTA_PUUTTUU = 'Valitse ainakin toinen valintaruuduista.'
const ARVOT_PUUTTUU = 'Kulutus ja jäljellä pitää olla yli nollan.'

function laskeriittävyys () {
  if (
    document.getElementById('tankki').checked == false &&
    document.getElementById('toimsäde').checked == false
  ) {
    document.getElementById('autovirhe').innerHTML = VALINTA_PUUTTUU
    return
  }
  let polttoaine = Number(document.getElementById('polttoaine').value)
  let kulutus = Number(document.getElementById('kulutus').value)

  if (polttoaine <= 0 || kulutus <= 0) {
    document.getElementById('autovirhe').innerHTML = ARVOT_PUUTTUU
    return
  }

  if (document.getElementById('tankki').checked === true) {
    let matka = ((polttoaine - 2) / kulutus) * 100
    document.getElementById('tankilletulos').innerHTML = Math.floor(matka)
  }

  if (document.getElementById('toimsäde').checked === true) {
    let matka = (polttoaine / kulutus) * 100
    document.getElementById('sädetulos').innerHTML = Math.floor(matka)
  }
}

/* Sauvatehtävät 
****************** */
let tekstit = [
    "Perinteisen sauvan pituus on ",
    "Vapaan sauvan pituus on ",
    "Sauvakävelysauvan pituus on "
];

let kertoimet = [0.83, 0.9, 0.68]

const SAUVA_VIRHE = "Lasketaan vain vähintään 120 cm pitkille.";
const SAUVA_VIRHE2 = "Valitse ainakin yksi sauvatyyppi.";

let valittuSauva = 0;
function valintanapit(valinta) {
    valittuSauva = valinta
    document.getElementById("pituus1").focus()
}

/* kirjoita tästä eteenpäin muut tarvittavat funktiot Sauva-tehtäviin */
function tyhjennä1() {
    document.getElementById("sauvatulos1").innerHTML = ""
    document.getElementById("sauvavirhe1").innerHTML = ""
}

function yksivalittu() {
    let pituus = Number(document.getElementById("pituus1").value)

    if(pituus <= 120) {
        document.getElementById("sauvavirhe1").innerHTML = SAUVA_VIRHE
        return
    }

    let sauvanpituus = pituus * kertoimet[valittuSauva]
    document.getElementById("sauvatulos1").innerHTML = tekstit[valittuSauva] + Math.round(sauvanpituus)
}

function tyhjennä2() {
    document.getElementById("sauvatulos2").innerHTML = ""
    document.getElementById("sauvavirhe2").innerHTML = ""
}

function montavalittu() {
    let pituus = Number(document.getElementById("pituus2").value)

    if(pituus <= 120) {
        document.getElementById("sauvavirhe2").innerHTML = SAUVA_VIRHE
        return
    }

    let rastit = document.getElementsByName("valinta2")
    let valittu = false

    for (let index = 0; index < rastit.length; index++) {
      if (rastit[index].checked === true) {
        valittu = true
        let sauvanpituus = pituus * kertoimet[index]
        document.getElementById("sauvatulos2").innerHTML += tekstit[index] + Math.round(sauvanpituus) + "<br>"
      }
      
      
      }
      if (valittu === false) {
        document.getElementById("sauvavirhe2").innerHTML = SAUVA_VIRHE2
        return
    }
}