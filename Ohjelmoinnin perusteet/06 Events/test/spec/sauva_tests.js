describe("Sauvatestit", function () {
    it("Student", function () {
        let temp = prompt("Your name: ");
        $("#nimix").html(temp);
        expect(temp).not.toEqual("");
    });

    // Sauvan pituus 1: Sauvan valinta (Vapaa)
    it("Sauvan pituus 1: Sauvan valinta (Vapaa)", function () {
        $("#sauvavirhe1").html("testiteksti");
        $("#sauvatulos1").html("testiteksti");
        $("#vapaa1").prop("checked", true);
        valintanapit(1);
        tyhjennä1();
        expect(valittuSauva).toEqual(1);
        let temp1 = $("#sauvavirhe1").html();
        let temp2 = $("#sauvatulos1").html();
        expect(temp1).toEqual("");
        expect(temp2).toEqual("");
    });

    // Sauvan pituus 1: Sauvan valinta (Perinteinen)
    it("Sauvan pituus 1: Sauvan valinta (Perinteinen)", function () {
        $("#sauvavirhe1").html("testiteksti");
        $("#sauvatulos1").html("testiteksti");
        $("#perinteinen1").prop("checked", true);
        valintanapit(0);
        tyhjennä1();
        expect(valittuSauva).toEqual(0);        
        let temp1 = $("#sauvavirhe1").html();
        let temp2 = $("#sauvatulos1").html();
        expect(temp1).toEqual("");
        expect(temp2).toEqual("");        
    });

    // Sauvan pituus 1: Sauvan valinta (Sauvakävely)
    it("Sauvan pituus 1: Sauvan valinta (Sauvakävely)", function () {
        $("#sauvavirhe1").html("testiteksti");
        $("#sauvatulos1").html("testiteksti");
        $("#kävely1").prop("checked", true);
        valintanapit(2);
        tyhjennä1();
        expect(valittuSauva).toEqual(2);        
        let temp1 = $("#sauvavirhe1").html();
        let temp2 = $("#sauvatulos1").html();
        expect(temp1).toEqual("");
        expect(temp2).toEqual("");        
    });

    // Sauvan pituus 1: Tekstilaatikko tyhjä
    it("Sauvan pituus 1: Tekstilaatikko tyhjä", function () {
        $("#vapaa1").prop("checked", true);
        valintanapit(1);
        $("#pituus1").val("");
        yksivalittu();
        let temp2 = $("#sauvavirhe1").html();
        expect(temp2).toEqual('Lasketaan vain vähintään 120 cm pitkille.');
    });

    // Sauvan pituus 1: Laskenta - perinteinen
    it("Sauvan pituus 1: Laskenta - perinteinen", function () {
        $("#perinteinen1").prop("checked", true);
        valintanapit(0);
        $("#pituus1").val("175");
        tyhjennä1();
        yksivalittu();        
        let temp1 = $("#sauvavirhe1").html();
        let temp2 = $("#sauvatulos1").html();
        expect(temp1).toEqual('');
        expect(temp2).toEqual('Perinteisen sauvan pituus on 145');
    });

    // Sauvan pituus 1: Laskenta - vapaa
    it("Sauvan pituus 1: Laskenta - vapaa", function () {
        $("#vapaa1").prop("checked", true);
        valintanapit(1);
        $("#pituus1").val("175");
        tyhjennä1();
        yksivalittu();
        let temp1 = $("#sauvavirhe1").html();
        let temp2 = $("#sauvatulos1").html();
        expect(temp1).toEqual('');
        expect(temp2).toEqual('Vapaan sauvan pituus on 158');
    });

    // Sauvan pituus 1: Laskenta - kävely
    it("Sauvan pituus 1: Laskenta - kävely", function () {
        $("#kävely1").prop("checked", true);
        valintanapit(2);
        $("#pituus1").val("175");
        tyhjennä1();
        yksivalittu();
        let temp1 = $("#sauvavirhe1").html();
        let temp2 = $("#sauvatulos1").html();
        expect(temp1).toEqual('');
        expect(temp2).toEqual('Sauvakävelysauvan pituus on 119');
    });    

    // Sauvan pituus 2: Tekstilaatikko tyhjä
    it("Sauvan pituus 2: Tekstilaatikko tyhjä", function () {
        $("#pituus2").val("");
        tyhjennä2();
        montavalittu();
        let temp1 = $("#sauvatulos2").html();
        let temp2 = $("#sauvavirhe2").html();
        expect(temp2).toEqual('Lasketaan vain vähintään 120 cm pitkille.');
        expect(temp1).toEqual('');
    });

    // Sauvan pituus 2: Ei rasteja
    it("Sauvan pituus 2: Ei rasteja", function () {
        $("#perinteinen2").prop("checked", false);
        $("#vapaa2").prop("checked", false);
        $("#kävely2").prop("checked", false);
        $("#pituus2").val("170");
        tyhjennä2();
        montavalittu();
        let temp1 = $("#sauvatulos2").html();
        let temp2 = $("#sauvavirhe2").html();
        expect(temp2).toEqual('Valitse ainakin yksi sauvatyyppi.');
        expect(temp1).toEqual('');
    });

    // Sauvan pituus 2: Kaikki rastit
    it("Sauvan pituus 2: Kaikki rastit", function () {
        $("#perinteinen2").prop("checked", true);
        $("#vapaa2").prop("checked", true);
        $("#kävely2").prop("checked", true);
        $("#pituus2").val("170");
        tyhjennä2();
        montavalittu();
        let temp1 = $("#sauvatulos2").html();
        let temp2 = $("#sauvavirhe2").html();
        expect(temp2).toEqual('');
        expect(temp1).toEqual('Perinteisen sauvan pituus on 141<br>' +
            'Vapaan sauvan pituus on 153<br>' +
            'Sauvakävelysauvan pituus on 116<br>');
    });    

    // Sauvan pituus 2: Yksi rasti
    it("Sauvan pituus 2: Kaikki rastit", function () {
        $("#perinteinen2").prop("checked", false);
        $("#vapaa2").prop("checked", true);
        $("#kävely2").prop("checked", false);
        $("#pituus2").val("170");
        tyhjennä2();
        montavalittu();
        let temp1 = $("#sauvatulos2").html();
        let temp2 = $("#sauvavirhe2").html();
        expect(temp2).toEqual('');
        expect(temp1).toEqual('Vapaan sauvan pituus on 153<br>');
    });

    // Sauvan pituus 2: Kaksi rastia
    it("Sauvan pituus 2: Kaksi rastia", function () {
        $("#perinteinen2").prop("checked", false);
        $("#vapaa2").prop("checked", true);
        $("#kävely2").prop("checked", true);
        $("#pituus2").val("170");
        tyhjennä2();
        montavalittu();
        let temp1 = $("#sauvatulos2").html();
        let temp2 = $("#sauvavirhe2").html();
        expect(temp2).toEqual('');
        expect(temp1).toEqual('Vapaan sauvan pituus on 153<br>' +
            'Sauvakävelysauvan pituus on 116<br>');
    });
});

