
//Functions
function UserDetails() {
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById("lname").value;

    var user = {
        name:firstname,
        name2:lastname,
    };


    var message='The User s name is :' +' '+ user.name + ' ' + user.name2;
    console.log(message);

    document.getElementById("output").innerHTML = message;
}

//Closures
function calculate() {
   var number=document.getElementById('number').value;


    var calcSum = function(){
        var number2=document.getElementById('number2').value;
        return number * number2;
    };

   // console.log(calcSum())
    document.getElementById("result").innerHTML = calcSum();
}


function buttonClicked () {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;


    function Book(title,author) {
        this.title = title,
            this.author = author,

            this.name = function () {
                return this.title + " " + this.author;
            }

    }
    Book.prototype={
        constructor: Book,
        isbn:45678
    }

    var book = new Book();
    console.log(book.isbn);
    var message = book.name();
    document.getElementById('details').innerHTML = message;

    console.log(Book.prototype);
}

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};