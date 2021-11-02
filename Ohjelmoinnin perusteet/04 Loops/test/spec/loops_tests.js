/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

describe("Loops", function () {
    it("Student", function () {
        var temp = prompt("Your name: ");
        $("#nimix").html(temp);
        expect(temp).not.toEqual("");
    });

    // L1: Your name
    it("L1: Your name", function () {
        $("#name1").val("Ville");
        $("#name2").val("Aalto");

        l01();
        var temp1 = $("#first_name").html();
        var temp2 = $("#last_name").html();

        expect(temp1).toEqual("Ville<br>Ville<br>Ville<br>Ville<br>Ville<br>");
        expect(temp2).toEqual("Aalto<br>Aalto<br>Aalto<br>Aalto<br>Aalto<br>");
    });
    
    // L2: Numbers
    it("L2: Numbers", function () {
        l02();
        var temp1 = $("#five").html();
        var temp2 = $("#six").html();

        expect(temp1).toEqual("5 10 15 20 25 30 35 40 45 50 ");
        expect(temp2).toEqual("6 12 18 24 30 36 42 48 54 60 ");
    });
    
    // L3: Stars
    it("L3: Stars", function () {
        $("#amount").val(4);

        l03();
        var temp1 = $("#stars1").html();
        var temp2 = $("#stars2").html();

        expect(temp1).toEqual("*<br>**<br>***<br>****<br>");
        expect(temp2).toEqual("*<br>**<br>***<br>****<br>");
    });
    
    // L4: Numbers
    it("L4: Numbers", function () {
        l04();
        var temp1 = $("#numbers1").html();
        var temp2 = $("#numbers2").html();
        var temp3 = $("#numbers3").html();

        expect(temp1).toEqual("10 9 8 7 6 5 4 3 2 1 0 -1 -2 -3 -4 -5 -6 -7 -8 -9 -10 ");
        expect(temp2).toEqual("-20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0 2 4 6 8 10 12 14 16 18 20 ");
        expect(temp3).toEqual("29 27 25 23 21 19 17 15 13 11 9 7 5 3 1 ");
    });
    
    // L5: Divisibility
    it("L5: Divisibility", function () {
        $("#min").val(2);
        $("#max").val(18);

        l05();
        var temp1 = $("#divisibility3").html();
        var temp2 = $("#divisibility5").html();

        expect(temp1).toEqual("3 6 9 12 15 18 ");
        expect(temp2).toEqual("5 10 15 ");
    });
    
    // F6: Heads or tails
    it("F6: Heads or tails", function () {
        l06();
        var temp1 = Number($("#zeros").html());
        var temp2 = Number($("#ones").html());
        expect(temp1).toBeGreaterThan(400);
        expect(temp2).toBeGreaterThan(400);
        expect(temp1).toBeLessThan(600);
        expect(temp2).toBeLessThan(600);
    });    

    // F7: Joker number
    it("F7: Joker number", function () {
        l07();
        var temp1 = Number($("#week").html());
        expect(temp1).toBeGreaterThan(0);
        expect(temp1).toBeLessThan(53);
        
        var temp2 = $("#joker").html();
        temp2 = temp2.trim();
        var digits = temp2.split(" ");
        for ( var i = 0; i < digits.length; i++) {
           expect(digits[i]).toBeLessThanOrEqual(9);
           expect(digits[i]).toBeGreaterThanOrEqual(0);
       }        
    });
    
    // L8: Multiply
    it("L8: Multiply", function () {
        $("#multiplier").val(3);

        l08();
        var temp = $("#table").html();

        expect(temp).toEqual("3 * 0 = 0<br>3 * 1 = 3<br>3 * 2 = 6<br>" +
        "3 * 3 = 9<br>3 * 4 = 12<br>3 * 5 = 15<br>3 * 6 = 18<br>3 * 7 = 21<br>" +
        "3 * 8 = 24<br>3 * 9 = 27<br>3 * 10 = 30<br>");
    }); 
    
    // L9: Multiply all
    it("L9: Multiply all", function () {
        l09();
        var temp = $("#multiplication").html();
        
        const space = ";&nbsp;&nbsp;"
        var result = "";    
        for (var i = 0; i <= 10; i++) {
            for (var j = 0; j <= 10; j++) {
                var amount = i * j;
                result += i + " * " + j + " = " + amount + space;
            }
            result += "<br>";
        } 

        expect(temp).toEqual(result);
    });     
});

