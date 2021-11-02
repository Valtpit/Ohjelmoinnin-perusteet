/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :Valtteri Pitkänen
 * Started date : 7.2
 * Ended   date : 7.2
 * 
 */






// define here the common functions calculateHedgeRow and getMeters
function calculateHedgeRow(plants, distance) {
    return plants * distance
}

function getMeters (distance) {
    return distance = distance / 100
}

let length_cm1_total = 0
let length_m1_total = 0
let plants1_total = 0

function lt01() {
    let plants = Number(document.getElementById("plants1").value);
    let distance = Number(document.getElementById("distance1").value);

    let l_cm = calculateHedgeRow(plants, distance)
    let l_m = getMeters(l_cm)

    length_cm1_total += l_cm
    length_m1_total += l_m
    plants1_total += plants

    document.getElementById("length_cm1").innerHTML = l_cm
    document.getElementById("length_m1").innerHTML = l_m
    
    document.getElementById("length_cm1_total").innerHTML = length_cm1_total
    document.getElementById("length_m1_total").innerHTML = length_m1_total
    document.getElementById("plants1_total").innerHTML = plants1_total
}

let length_cm2_total = 0
let length_m2_total = 0
let plants2_total = 0
let family_total = 4

function lt02() {
    if (family_total > 0) {
    let plants = Number(document.getElementById("plants2").value);
    let distance = Number(document.getElementById("distance2").value);
   

   let l_cm = calculateHedgeRow(plants, distance)
   let l_m = getMeters(l_cm)
    
    length_cm2_total += l_cm
    length_m2_total += l_m
    plants2_total += plants

    document.getElementById("length_cm2").innerHTML = l_cm
    document.getElementById("length_m2").innerHTML = l_m
    
    document.getElementById("length_cm2_total").innerHTML = length_cm2_total
    document.getElementById("length_m2_total").innerHTML = length_m2_total
    document.getElementById("plants2_total").innerHTML = plants2_total

    family_total --
    } else {
        document.getElementById("finish").innerHTML = "All data entered."
    }
}

function lt03() {    

    let plants = Number(document.getElementById("plants3").value);
    let distance = Number(document.getElementById("distance3").value);

    let l_cm = calculateHedgeRow(plants, distance)
    let l_m = getMeters(l_cm)

    let length_cm3_total = 4 * l_cm
    let length_m3_total = 4 * l_m
    let plants3_total = 4 * plants

    document.getElementById("length_cm3").innerHTML = l_cm
    document.getElementById("length_m3").innerHTML = l_m
    
    document.getElementById("length_cm3_total").innerHTML = length_cm3_total
    document.getElementById("length_m3_total").innerHTML = length_m3_total
    document.getElementById("plants3_total").innerHTML = plants3_total

    

}