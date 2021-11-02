/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

describe("Loopings", function () {
    it("Student", function () {
        var temp = prompt("Your name: ");
        $("#nimix").html(temp);
        expect(temp).not.toEqual("");
    });

    // common functions: calculateHedgeRow
    it("calculateHedgeRow", function () {
        var temp = calculateHedgeRow(5, 50);

        expect(temp).toEqual(250);
    });

    // common functions: getMeters
    it("getMeters", function () {
        var temp = getMeters(250);

        expect(temp).toEqual(2.5);
    });
    
    
    // LT1: Hedgerow 1 
    it("LT1: Hedgerow 1 ", function () {
        $("#plants1").val(5);
        $("#distance1").val(50);                
        lt01();
        
        $("#plants1").val(4);
        $("#distance1").val(40);                
        lt01();
        
        $("#plants1").val(3);
        $("#distance1").val(30);                
        lt01();
        
        $("#plants1").val(2);
        $("#distance1").val(20);                
        lt01();
        
        var temp1 = $("#length_cm1").html();
        var temp2 = $("#length_m1").html();
        var temp3 = $("#length_cm1_total").html();
        var temp4 = $("#length_m1_total").html();
        var temp5 = $("#plants1_total").html();       

        expect(temp1).toEqual("40");
        expect(temp2).toEqual("0.4");
        expect(temp3).toEqual("540");
        expect(temp4).toEqual("5.4");
        expect(temp5).toEqual("14");
    });

    // LT2: Hedgerow 2
    it("LT2: Hedgerow 2 ", function () {
        $("#plants2").val(5);
        $("#distance2").val(50);                
        lt02();
        
        $("#plants2").val(4);
        $("#distance2").val(40);                
        lt02();
        
        $("#plants2").val(3);
        $("#distance2").val(30);                
        lt02();
        
        $("#plants2").val(2);
        $("#distance2").val(20);                
        lt02();
        
        $("#plants2").val(2);
        $("#distance2").val(20);                
        lt02();
                
        var temp1 = $("#length_cm2").html();
        var temp2 = $("#length_m2").html();
        var temp3 = $("#length_cm2_total").html();
        var temp4 = $("#length_m2_total").html();
        var temp5 = $("#plants2_total").html();
        var temp6 = $("#finish").html();

        expect(temp1).toEqual("40");
        expect(temp2).toEqual("0.4");
        expect(temp3).toEqual("540");
        expect(temp4).toEqual("5.4");
        expect(temp5).toEqual("14");
        expect(temp6).toEqual("All data entered.");
    });

    // LT3: Hedgerow 3
    it("LT3: Hedgerow 3 ", function () {
        $("#plants3").val(5);
        $("#distance3").val(50);                
        lt03();
                        
        var temp1 = $("#length_cm3").html();
        var temp2 = $("#length_m3").html();
        var temp3 = $("#length_cm3_total").html();
        var temp4 = $("#length_m3_total").html();
        var temp5 = $("#plants3_total").html();

        expect(temp1).toEqual("250");
        expect(temp2).toEqual("2.5");
        expect(temp3).toEqual("1000");
        expect(temp4).toEqual("10");
        expect(temp5).toEqual("20");
    });
});

