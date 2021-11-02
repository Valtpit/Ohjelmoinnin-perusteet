describe("Ajoneuvotestit", function () {
    it("Student", function () {
        let temp = prompt("Your name: ");
        $("#nimix").html(temp);
        expect(temp).not.toEqual("");
    });

    // Ajoneuvo: Rastit päälle
    it("Ajoneuvo: Rastit päälle", function () {
        $("#tankki").prop("checked", true);
        $("#toimsäde").prop("checked", true);
        tankille();
        toimintasäde();
        let temp1 = $("#ttankille").html();
        let temp2 = $("#tsäde").html();
        expect(temp1).toEqual('Tankille viimeistään <span id="tankilletulos"></span> km:n päästä');
        expect(temp2).toEqual('Toimintasäde <span id="sädetulos"></span> km');
        let temp3 = $("#ttankille").attr("class");
        let temp4 = $("#tsäde").attr("class");
        expect(temp3).toEqual('');
        expect(temp4).toEqual(''); 
    });

    // Ajoneuvo: Rastit pois
    it("Ajoneuvo: Rastit pois", function () {
        $("#tankilletulos").html("123");
        $("#sädetulos").html("123");
        $("#tankki").prop("checked", false);
        $("#toimsäde").prop("checked", false);
        tankille();
        toimintasäde();
        let temp1 = $("#ttankille").html();
        let temp2 = $("#tsäde").html();
        expect(temp1).toEqual('Tankille viimeistään <span id="tankilletulos"></span> km:n päästä');
        expect(temp2).toEqual('Toimintasäde <span id="sädetulos"></span> km');
        let temp3 = $("#ttankille").attr("class");
        let temp4 = $("#tsäde").attr("class");
        expect(temp3).toEqual('piilossa');
        expect(temp4).toEqual('piilossa'); 
     }); 

     // Ajoneuvo: Tekstilaatikot tyhjiä
    it("Ajoneuvo: Tekstilaatikot tyhjiä", function () {
        $("#tankki").prop("checked", true);
        $("#toimsäde").prop("checked", true);        
        $("#polttoaine").val("");
        $("#kulutus").val("");
        tankille();
        toimintasäde();        
        laskeriittävyys();
        let temp1 = $("#ttankille").html();
        let temp2 = $("#tsäde").html();
        let temp3 = $("#autovirhe").html();
        expect(temp1).toEqual('Tankille viimeistään <span id="tankilletulos"></span> km:n päästä');
        expect(temp2).toEqual('Toimintasäde <span id="sädetulos"></span> km');
        expect(temp3).toEqual('Kulutus ja jäljellä pitää olla yli nollan.');
    });

    // Ajoneuvo: Polttoaine fokus
    it("Ajoneuvo: Polttoaine fokus", function () {
        $("#tankilletulos").html("123");
        $("#sädetulos").html("123");
        $("#tankki").prop("checked", true);
        $("#toimsäde").prop("checked", true);
        $("#polttoaine").focus();
        let temp1 = $("#ttankille").html();
        let temp2 = $("#tsäde").html();
        expect(temp1).toEqual('Tankille viimeistään <span id="tankilletulos"></span> km:n päästä');
        expect(temp2).toEqual('Toimintasäde <span id="sädetulos"></span> km');
     });

    // Ajoneuvo: Kulutus fokus
    it("Ajoneuvo: Kulutus fokus", function () {
        $("#tankilletulos").html("123");
        $("#sädetulos").html("123");
        $("#tankki").prop("checked", true);
        $("#toimsäde").prop("checked", true);
        $("#kulutus").focus();
        let temp1 = $("#ttankille").html();
        let temp2 = $("#tsäde").html();
        expect(temp1).toEqual('Tankille viimeistään <span id="tankilletulos"></span> km:n päästä');
        expect(temp2).toEqual('Toimintasäde <span id="sädetulos"></span> km');
     });
     
    // Ajoneuvo: Laskenta - ei rasteja
    it("Ajoneuvo: Laskenta - ei rasteja", function () {
        $("#tankki").prop("checked", false);
        $("#toimsäde").prop("checked", false);
        tankille();
        toimintasäde();
        $("#polttoaine").val("123");
        $("#kulutus").val("123"); 
        laskeriittävyys();       
        let temp1 = $("#ttankille").html();
        let temp2 = $("#tsäde").html();
        expect(temp1).toEqual('Tankille viimeistään <span id="tankilletulos"></span> km:n päästä');
        expect(temp2).toEqual('Toimintasäde <span id="sädetulos"></span> km');
        let temp3 = $("#ttankille").attr("class");
        let temp4 = $("#tsäde").attr("class");
        expect(temp3).toEqual('piilossa');
        expect(temp4).toEqual('piilossa');
        let temp5 = $("#autovirhe").html();
        expect(temp5).toEqual('Valitse ainakin toinen valintaruuduista.');
    });
    
    // Ajoneuvo: Laskenta - molemmat rastit
    it("Ajoneuvo: Laskenta - molemmat rastit", function () {
        $("#tankki").prop("checked", true);
        $("#toimsäde").prop("checked", true);
        $("#polttoaine").val("10.5");
        $("#kulutus").val("5"); 
        tankille();
        toimintasäde();
        laskeriittävyys();
        let temp1 = $("#ttankille").html();
        let temp2 = $("#tsäde").html();
        let temp3 = $("#ttankille").attr("class");
        let temp4 = $("#tsäde").attr("class");
        let temp5 = $("#autovirhe").html();        
        expect(temp1).toEqual('Tankille viimeistään <span id="tankilletulos">170</span> km:n päästä');
        expect(temp2).toEqual('Toimintasäde <span id="sädetulos">210</span> km');
        expect(temp3).toEqual('');
        expect(temp4).toEqual(''); 
        expect(temp5).toEqual(''); 
    });

    // Ajoneuvo: Laskenta - Toimintasäde
    it("Ajoneuvo: Laskenta - Toimintasäde", function () {
        $("#tankki").prop("checked", false);
        $("#toimsäde").prop("checked", true);
        $("#polttoaine").val("10.5");
        $("#kulutus").val("5"); 
        tankille();
        toimintasäde();
        laskeriittävyys();
        let temp1 = $("#ttankille").html();
        let temp2 = $("#tsäde").html();
        let temp3 = $("#ttankille").attr("class");
        let temp4 = $("#tsäde").attr("class");
        let temp5 = $("#autovirhe").html();        
        expect(temp1).toEqual('Tankille viimeistään <span id="tankilletulos"></span> km:n päästä');
        expect(temp2).toEqual('Toimintasäde <span id="sädetulos">210</span> km');
        expect(temp3).toEqual('piilossa');
        expect(temp4).toEqual(''); 
        expect(temp5).toEqual(''); 
    }); 
    
    // Ajoneuvo: Laskenta - Tankille viimeistään
    it("Ajoneuvo: Laskenta - Tankille viimeistään", function () {
        $("#tankki").prop("checked", true);
        $("#toimsäde").prop("checked", false);
        $("#polttoaine").val("10.5");
        $("#kulutus").val("5"); 
        tankille();
        toimintasäde();
        laskeriittävyys();
        let temp1 = $("#ttankille").html();
        let temp2 = $("#tsäde").html();
        let temp3 = $("#ttankille").attr("class");
        let temp4 = $("#tsäde").attr("class");
        let temp5 = $("#autovirhe").html();        
        expect(temp1).toEqual('Tankille viimeistään <span id="tankilletulos">170</span> km:n päästä');
        expect(temp2).toEqual('Toimintasäde <span id="sädetulos"></span> km');
        expect(temp3).toEqual('');
        expect(temp4).toEqual('piilossa'); 
        expect(temp5).toEqual(''); 
    }); 
});

