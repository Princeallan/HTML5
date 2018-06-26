'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    let p1 = new Promise(
        (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise start(<small>Async code started</small>)<br/>');
            // This is only an example to create asynchronism
            window.setTimeout(
                function() {
                    resolve(thisPromiseCount);
                },
                Math.random() * 2000 + 3000);
        }
    );

    p1.then(
        function(val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        }).catch(
        // Log the rejection reason
        (reason) => {
            console.log('Promise rejected ('+reason+') here.');
        });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}if ("Promise" in window) {
    let btn = document.getElementById("btn");
    btn.addEventListener("click",testPromise);
} else {
    log = document.getElementById('log');
    log.innerHTML = "Live example not available as your browser doesn't support the <code>Promise<code> interface.";
}



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

//Prototype
function buttonClicked () {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;


    function Book(title,author) {
            this.title = title;
            this.author = author;
    }

    Book.prototype={
        constructor: Book,
        isbn:45678,

        name : function () {
            return book.title + " " + this.author;
        }

    }

    var book = new Book(title,author);
    var message = book.name();

    document.getElementById('details').innerHTML = message;
    
}



