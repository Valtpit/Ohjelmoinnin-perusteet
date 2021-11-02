/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/
 
/*
 * Student name : Valtteri Pitkänen
 * Started date :10.1
 * Ended   date :10.1
 * 
 */

function t01() {
    let name = document.getElementById("name").value;
    let output = document.getElementById("welcome");
    output.innerHTML = name;

}

function t02() {        
    let secInMinutes = 60;
    let minInHours = 60;
    let hoursInDay = 24;
    let daysInYear = 365;

    let secInYear = secInMinutes * minInHours * hoursInDay * daysInYear ;
    let output = document.getElementById("seconds");
    output.innerHTML = secInYear;
}

function t03() {
    let n1 = Number(document.getElementById("first").value);
    let n2 = Number(document.getElementById("second").value);
    let n3 = Number(document.getElementById("third").value);

    let avg = (n1 + n2 + n3) / 3;

    document.getElementById("average").innerHTML = avg;
}

function t04() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let sum = number1 + number2;
    let diff = number1 - number2;
    let mul = number1 * number2;
    let div = number1 / number2;
    let mod = number1 % number2;

    document.getElementById("d1").innerHTML = number1;
    document.getElementById("d4").innerHTML = number1;
    document.getElementById("d7").innerHTML = number1;
    document.getElementById("d10").innerHTML = number1;
    document.getElementById("d13").innerHTML = number1;

    document.getElementById("d2").innerHTML = number2;
    document.getElementById("d5").innerHTML = number2;
    document.getElementById("d8").innerHTML = number2;
    document.getElementById("d11").innerHTML = number2;
    document.getElementById("d14").innerHTML = number2;

    document.getElementById("d3").innerHTML = sum;
    document.getElementById("d6").innerHTML = diff;
    document.getElementById("d9").innerHTML = mul;
    document.getElementById("d12").innerHTML = div;
    document.getElementById("d15").innerHTML = mod;
}


function t05() {
    let price = Number(document.getElementById("price").value);
    let percent = Number(document.getElementById("percent").value);
    let new_price = price - (percent/100)* price;

    document.getElementById("newprice").innerHTML = new_price;
}

function t06() {
    let birthyear = Number(document.getElementById("year").value);
    let today = new Date();
    let current_year = today.getFullYear();

    let age = current_year - birthyear;

    document.getElementById("age").innerHTML = age;

}

function t07() {
    let seats = Number(document.getElementById("seats").value);
    let guests = Number(document.getElementById("guests").value);
    let free = seats - guests;

    document.getElementById("remaining").innerHTML = free;

}

function t08() {
    let plants = Number(document.getElementById("plants").value);
    let distance = Number(document.getElementById("distance").value);

    let length_cm = plants * distance;
    let length_m = length_cm / 100;

    document.getElementById("length_cm").innerHTML = length_cm;
    document.getElementById("length_m").innerHTML = length_m;

}

function t09() {
    let guests = Number(document.getElementById("participant").value);
    let sausages = guests * 3;
    let drinks = guests * 5;
    let tomatoes = guests * 2;
    let eggs = guests;

    document.getElementById("sausages").innerHTML = sausages;
    document.getElementById("drinks").innerHTML = drinks;
    document.getElementById("tomatoes").innerHTML = tomatoes;
    document.getElementById("eggs").innerHTML = eggs;

}




