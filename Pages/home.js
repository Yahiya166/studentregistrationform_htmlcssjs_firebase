// Function: Go To Login Page..

function logout() {
    firebase.auth().signOut().then(function(success){
        window.location.replace('../index.html');
    }).catch(function(error){
        alert(error.message);
    })
}

// Function: Current User..

function currentUser(){
    let arr = []
    let crntuser = document.getElementById('crntuser');

    firebase.database().ref('/').child('studentData').on('child_added',function(data){
        arr.push(data.val())
        localStorage.setItem("lastname", "yahiya");
        // crntuser.innerHTML = `Hello ${arr[1].stdName} ${arr[1].frthName}`
        crntuser.innerHTML = localStorage.getItem('lastname')

    })
    // crntuser.innerHTML = data.val()
    
    console.log(arr);
}

currentUser()