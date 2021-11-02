/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name : Valtteri Pitkänen
 * Started date : 19.1
 * Ended   date : 19.1
 * 
 */

function v01() {
    let today = new Date();
    let current_year = today.getFullYear();
    let birth_year = Number(document.getElementById("year").value);
    let age = current_year - birth_year;

    if (age < 18) {
        document.getElementById("allow").innerHTML = "too young";
     } else {
        document.getElementById("allow").innerHTML = "Welcome!";
     }

}

function v02() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    if (number1 < number2) {
        document.getElementById("smaller").innerHTML = number1;
     } else {
        document.getElementById("smaller").innerHTML = number2;
     }

}

function v03() {
    const NEG = "One of the numbers is negative.";
    const POS = "Both numbers are either positive or negative.";

    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let tulo = number1 * number2;

    if (tulo < 0) {
        document.getElementById("negative").innerHTML = NEG;
     } else {
        document.getElementById("negative").innerHTML = POS;
     }
    
}

function v04() {
    const REC = "rectangle";
    const SQ = "square";

    let number1 = Number(document.getElementById("side1").value);
    let number2 = Number(document.getElementById("side2").value);

    if (number1 !== number2) {
        document.getElementById("square").innerHTML = REC;
     } else {
        document.getElementById("square").innerHTML = SQ;
     }

}

function v05() {
    const EVEN = "even";
    const ODD = "odd";

    let number = Number(document.getElementById("number3").value);

    let mod = number % 2;

    if (mod === 0) {
        document.getElementById("even").innerHTML = EVEN;
    } else {
        document.getElementById("even").innerHTML = ODD;
    }

}

function v06() {
    let number = Number(document.getElementById("number3").value); 

    if (number < 0) {
        document.getElementById("positive").innerHTML = "negative";
    } else if (number > 0) {
        document.getElementById("positive").innerHTML = "positive";
    } else {
        document.getElementById("positive").innerHTML = "zero";
    }

}

function v07() {
    let number1 = Number(document.getElementById("digit_a").value);
    let number2= Number(document.getElementById("digit_b").value);
    let number3 = Number(document.getElementById("digit_c").value);
    let number4 = Number(document.getElementById("digit_d").value);
    let smallest = number1;
    
    if (number2 < smallest) {
        smallest = number2;
    } 
    if (number3 < smallest) {
        smallest = number3;
    } 
    if (number4 < smallest){
        smallest = number4;
    }

    document.getElementById("smallest").innerHTML = smallest

    let biggest = number1;

    if (number2 > biggest) {
        biggest = number2;
    }
    if (number3 > biggest) {
        biggest = number3;
    }
    if (number4 > biggest){
        biggest = number4;
    }
 
    document.getElementById("biggest").innerHTML = biggest

}

function v08() {
    let leap = Number(document.getElementById("yearx").value);

    if (leap % 4 === 0) {
        if (leap % 100 === 0) {
            if (leap % 400 === 0) {
                document.getElementById("leap_year").innerHTML = "is leap year";
            } else {
                document.getElementById("leap_year").innerHTML = "is not leap year";
            }
        } else {
            document.getElementById("leap_year").innerHTML = "is leap year";
        }
    } else {
        document.getElementById("leap_year").innerHTML = "is not leap year";
    }

}

function v09() {
	const FLOWER1 = '<img alt="flower1" src="img/flower1.png">';
	const FLOWER2 = '<img alt="flower2" src="img/flower2.png">';
	const FLOWER3 = '<img alt="flower3" src="img/flower3.png">';
    const FLOWER4 = '<img alt="flower4" src="img/flower4.png">';  
    
    let number = Number(document.getElementById("number4").value);

    if (number % 3 === 0) {
        document.getElementById("flower").innerHTML = FLOWER1;
    } else {
        document.getElementById("flower").innerHTML = FLOWER2;
    }

    if (number > 10) {
        document.getElementById("flower").innerHTML += FLOWER3;
    } else {
        document.getElementById("flower").innerHTML += FLOWER4;
    }
}
