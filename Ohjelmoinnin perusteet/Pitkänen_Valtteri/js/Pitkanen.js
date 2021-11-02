/*Pitkänen Valtteri 1.3*/

class Friend {
    constructor (last, first, number, birth) {
        this._last = last;
        this._first = first;
        this._number = number;
        this._birth = birth;
    }

    averageAge() {
        let today = new Date().getFullYear()
        return today - this._birth;
    }

    printName() {
        return this.last + ", " + this._first
    }

    set last(plast) {
        this._last = plast
    }

    set first(pfirst) {
        this._first = pfirst;
    }

    set number(pnumber) {
        this._number = pnumber
    }

    set birth(pbirth) {
        this._birth = pbirth;
    }

    get last() {
        return this._last;
    }

    get first() {
        return this._first;
    }

    get number() {
        return this._number;
    }

    get birth() {
        return this._birth
    }
}

let wholeBook = {
    allFriends: new Array(),

    saveFriend: function(book) {
        this.allFriends.push(book);
    },

    removeFriend: function (index) {
        this.allFriends.splice(index, 1);
    },

    averageAge: function () {
        let total = 0;
        let today = new Date().getFullYear()
        for (let i = 0; i < this.allFriends.length; i++) {
            let book = this.allFriends[i];
            total += (today - book.birth);
        }
        return Math.round(total / this.allFriends.length);
    }
};

function startData() {
    let friend = new Friend ("Pitkänen", "Valtteri", "0442117768", 1999);
    wholeBook.saveFriend(friend);

    friend = new Friend ("Pitkänen", "Mikko", "0332134556", 1995);
    wholeBook.saveFriend(friend);

    friend = new Friend ("Pitkänen", "Joona", "0332117775", 2004);
    wholeBook.saveFriend(friend);

    print();
}

function print() {
    let output = document.getElementById("allFriends");
    output.innerHTML = "";

    document.getElementById("age").innerHTML = "";

    for (let i = 0; i < wholeBook.allFriends.length; i++) {
        let oneFriend = wholeBook.allFriends[i];
        output.innerHTML += "<label class='output' onclick='printOne(" + i + 
        ")'>" + oneFriend.printName() + "</label>";
    }

    document.getElementById("age").innerHTML =
    "Average age: " + wholeBook.averageAge() + "<br>" +
    "Number of friends: " + wholeBook.allFriends.length;

    document.getElementById("oneFriend").innerHTML = "";
}

function printOne(index) {
    let friend = wholeBook.allFriends[index];

    document.getElementById("oneFriend").innerHTML =
    /*"Name: "*/friend.printName() + "<br>" +
    "Phone number: " + friend.number + "<br>" +
    "Birth year: " + friend.birth + "<br>" +
    "age: " + friend.averageAge() + "<br>" +
    "<button onclick='remove(" + index + ")'>Remove</button>" +
    "<button onclick='edit(" + index + ")'>Edit</button>";
}

function remove(ind) {
    wholeBook.removeFriend(ind);
    print();
}

function edit(ind) {
    let oneFriend = wholeBook.allFriends[ind];
    document.getElementById('last').value = oneFriend.last;
    document.getElementById('first').value = oneFriend.first;
    document.getElementById('phone').value = oneFriend.number;
    document.getElementById('birth').value = oneFriend.birth;
    document.getElementById('index').value = ind;
}

function save() {
    if (document.getElementById('index').value === "") {
        let friend = new Friend (
            document.getElementById('last').value,
            document.getElementById('first').value,
            Number(document.getElementById('phone').value),
            Number(document.getElementById('birth').value),
            );
            wholeBook.saveFriend(friend);
    } else {
        let i = Number(document.getElementById('index').value);
        let oneFriend = wholeBook.allFriends[i];

        oneFriend.last = document.getElementById('last').value;
        oneFriend.first = document.getElementById('first').value;
        oneFriend.number = Number(document.getElementById('phone').value);
        oneFriend.birth = Number(document.getElementById('birth').value);
    }

    print();
    cancel()
}

function cancel() {
    document.getElementById('last').value = "";
    document.getElementById('first').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('birth').value = "";
    document.getElementById('index').value = "";
}