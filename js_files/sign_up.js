
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



document.getElementById("inputMailPassForm").addEventListener("submit" , function (e) {
e.preventDefault()


let getUserEmail = document.getElementById('userInputEmail').value
let getUserPassword = document.getElementById('userInputPassword').value

if (getUserEmail && getUserPassword){
    user = {
        userEmail: getUserEmail,
        userPassword: getUserPassword,
    }

    let stringObj = JSON.stringify(user)
    localStorage.setItem("userAccountInfo", stringObj)

    alert("account created successfully")
    window.location.href = "/html_files/sign_in.html"
} 

else {

    alert("wrong email or password")
}


})


