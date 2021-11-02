//Valtteri Pitkänen

function window_calculation () {
  const MIN = 'Minimum height and width of window is 50cm.';
  const MAX = 'Maximum height and width of window is 200cm.';
  const NAN = 'No amount. 1 assumed.';
  const MANY = 'No more than 10 equal size windows.'; // virheilmoitukset määrittely

  let korkeus = '';
  let leveys = '';
  let maara = '';

  let surface = '';
  let lasi = '';
  let puu = '';

  let lasit = '';
  let puut = ''; //tyhjätään tulostuspaikat

  document.getElementById('window_height').innerhtml = '';
  document.getElementById('window_width').innerhtml = '';
  document.getElementById('window_amount').innerhtml = '';

  korkeus = Number(document.getElementById('window_height').value);
  leveys = Number(document.getElementById('window_width').value);
  maara = Number(document.getElementById('window_amount').value); // kerätään tietoja käyttäjältä

  if (korkeus < 50 || leveys < 50) {
    document.getElementById('error').innerHTML = MIN;
    document.getElementById('wood').innerHTML = puu;
    document.getElementById('glass').innerHTML = lasi;
    document.getElementById('woods').innerHTML = puut;
    document.getElementById('glasses').innerHTML = lasit;
    return;
  } else if (korkeus > 200 || leveys > 200) {
    document.getElementById('error').innerHTML = MAX;
    document.getElementById('wood').innerHTML = puu;
    document.getElementById('glass').innerHTML = lasi;
    document.getElementById('woods').innerHTML = puut;
    document.getElementById('glasses').innerHTML = lasit;
    return;
  } else if (maara > 10) {
    document.getElementById('error').innerHTML = MANY;
    document.getElementById('wood').innerHTML = puu;
    document.getElementById('glass').innerHTML = lasi;
    document.getElementById('woods').innerHTML = puut;
    document.getElementById('glasses').innerHTML = lasit;
    return;
  } else if (maara < 1) {
    document.getElementById('error').innerHTML = NAN;
    maara = 1;
  } // virheilmoitukset, tyhjentävät myös edellisien laskujen tiedot.

  surface = ((leveys * korkeus) / 10000).toFixed(2); // koko ikkunan pinta-ala, cm2 muutos m2
  lasi = (((leveys - 10) * (korkeus - 10)) / 10000).toFixed(2); // lasin Pinta-ala, cm2 muutos m2
  puu = ((2 * (2 * (korkeus - 6) + 2 * (leveys - 6))) / 100).toFixed(2); // puun määrä cm2 muutos m

  lasit = (lasi * maara).toFixed(2); // monien ikkunoiden tiedot
  puut = (puu * maara).toFixed(2); // tiedoille määritelty max 2 desimaalia

  document.getElementById('wood').innerHTML = puu;
  document.getElementById('glass').innerHTML = lasi;
  document.getElementById('woods').innerHTML = puut;
  document.getElementById('glasses').innerHTML = lasit; // tulostaa tiedot käyttäjälle

  if (surface < 0.6) {
    document.getElementById('size').innerHTML = 'small window';
  } else if (surface < 1.6) {
    document.getElementById('size').innerHTML = 'medium window';
  } else if (surface < 2.6) {
    document.getElementById('size').innerHTML = 'large window';
  } else {
    document.getElementById('size').innerHTML = 'huge window';
  } // kertoo käyttäjälle ikkunan koon
}
