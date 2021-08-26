// Function: Go To Login Page..

function logout() {
    firebase.auth().signOut().then(function (success) {
        window.location.replace('../index.html');
    }).catch(function (error) {
        alert(error.message);
    })
}

// function: heading

function heading() {
    let arr = []
    let heading = document.getElementById('heading');


    firebase.database().ref('/').child('studentData').on('child_added', function (data) {
        arr.push(data.val());
        
        heading.innerHTML = '';
        for (var i = 0; i <= arr.length; i++) {
            heading.innerHTML += `<tr>
            <td>${arr[i].stdName}</td>
            <td>${arr[i].frthName}</td>
            <td>${arr[i].institute}</td>
            <td>${arr[i].course}</td>
            <td>${arr[i].email}</td>
            <td><button type="button" class="btn backgroundDark Lightcolor">Delete</button></td>
            </tr>`
        }
    })
}

heading()