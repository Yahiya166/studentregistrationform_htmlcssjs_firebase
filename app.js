// Function: Go To Sinup Page..

function gotosignup() {
    window.location.assign('registor.html');
}

// Function: Go To Login Page..

function signup() {
    let stdName = document.getElementById('stdName').value;
    let frthName = document.getElementById('frthName').value;
    let institute = document.getElementById('institute').value;
    let course = document.getElementById('course').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (stdName == '' || frthName == '' || institute == 'select Institute' || course == 'select Course' || email == '' || password == '') {
        alert("Please Enter Your Complete data")
    } else {
        stdAuth()
    }
}

function stdAuth() { 

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (success) {
        Registor()
    }).catch(function (error) {
        alert(error.message)
    })
}


function Registor() {
    var mode = {};

    mode.stdName = document.getElementById('stdName').value;
    mode.frthName = document.getElementById('frthName').value;
    mode.institute = document.getElementById('institute').value;
    mode.course = document.getElementById('course').value;
    mode.email = document.getElementById('email').value;

    firebase.database().ref('/').child('studentData').push(mode).then(function (success) {
        alert(mode.stdName + ' ' + mode.frthName + ' signup successfully')
        window.location.replace('index.html')

    }).catch(function (error) {
        alert(error.message)
    })
}

// Function: Login Page..

function login() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function (success) {
        window.location.replace('Pages/home.html')
    }).catch(function (error) {
        alert(error.message)
    })

}