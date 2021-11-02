/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name : Valtteri Pitkänen
 * Started date : 12.1
 * Ended   date : 12.1
 * 
 */

function j01() {
    let today = new Date();
    let current_year = today.getFullYear();

    let birth_year1 = Number(document.getElementById("year1").value);
    let birth_year2 = Number(document.getElementById("year2").value);

    let age1 = current_year - birth_year1;
    let age2 = current_year - birth_year2;
    let diff = age1 - age2;

    document.getElementById("age1").innerHTML = 
    "Person 1 age is " + age1;
    document.getElementById("age2").innerHTML = 
    "Person 2 age is " + age2;
    document.getElementById("difference").innerHTML =
     "Person 1 is " + diff + " years older than person 2";
}

function j02() {
    let kanta = Number(document.getElementById("height").value)
    let korkeus = Number(document.getElementById("width").value)
    let pinta_ala =  kanta * korkeus;

    document.getElementById("area").innerHTML = 
    "The area is " + pinta_ala + " m2.";
}

function j03() {
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);
    let num3 = num1 + num2

    document.getElementById("sum").innerHTML = 
    num1 + " + " + num2 + " = " + num3;
}

function j04() {
    const START = "Hello ";
    const MIDDLE = ", you are ";
    const END = " years of age.";

    let today = new Date();
    let current_year = today.getFullYear();

    let name = document.getElementById("name").value;
    let birth_year = Number(document.getElementById("year3").value);
    let age = current_year - birth_year;

    document.getElementById("message").innerHTML = 
    START + name + MIDDLE + age + END;
}

function j05() {
    let num1 = Number(document.getElementById("number3").value);
    let num2 = Number(document.getElementById("number4").value);
    let num3 = num1 + num2

    document.getElementById("sums").innerHTML +=
    num1 + " + " + num2 + " = " + num3 + "<br>";
}

