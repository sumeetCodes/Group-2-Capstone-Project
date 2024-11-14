
// let getUserEmail = document.getElementById('userInputEmail')
// let getUserPassword = document.getElementById('userInputPassword')

// let Form = document.getElementById('inputMailPassForm')

// let errorElement = document.getElementById('error')

// Form.addEventListener('submit', (e) => {
//     let users_Email_Password =[]
//     if(getUserEmail.value === '' || getUserEmail == null){
//         users_Email_Password.push('Email is required, put correct Email address')
//     }


//     if (users_Email_Password.length > 0) {
//         e.preventDefault()
//        errorElement.innerHTML = users_Email_Password.join(',')
//     }

 
// })



// Adds an event listener to the form that triggers on form submission
document.getElementById("inputMailPassForm").addEventListener("submit" , function (e) {

// Prevents the default form submission behavior (page refresh)    
e.preventDefault()

// Gets the value from the email input field from html document file
let getUserEmail = document.getElementById('userInputEmail').value

// Gets the value from the password input field from html document file
let getUserPassword = document.getElementById('userInputPassword').value

// Checks if both email and password are provided
if (getUserEmail && getUserPassword){

    // Creates an object containing the email and password
    user = {
        userEmail: getUserEmail,
        userPassword: getUserPassword,
    }

    // Converts the user object to a JSON string
    let stringObj = JSON.stringify(user)

    // Saves the JSON string in localStorage under the key "userAccountInfo"
    // stores the stringified user object in localStorage under the key userAccountInfo
    localStorage.setItem("userAccountInfo", stringObj)

     // Alerts the user that the account was created successfully
    //  notify or displays a small window
    alert("account created successfully")

    // Redirects the user to the sign-in page
    window.location.href = "/html_files/sign_in.html"
} 

// If either the email or password is missing, show an error message
else {

    alert("wrong email or password")
}


})


