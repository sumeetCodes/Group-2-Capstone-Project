
// Declaring an asynchronous function named 'dataAPI'
async function dataAPI() {

    // Initialize a variable to hold the fetched API data (set to null initially)
    let usersApiData = null

     // Try to fetch data from the external API and process it
    try {

        // Fetch data from the fake store API endpoint for users
        let apiUsers = await fetch("https://fakestoreapi.com/users")

        // Parse the API response into JSON format
        usersApiData = await apiUsers.json()
    } catch (error) {
        
 // If an error occurs during the fetch operation, it is caught
        // (this could be useful for logging or showing an error message)

        alert("Something Went Wrong, Please try again")

    }

    // Attach an event listener to the form submit event for the sign-in form
    document.getElementById("formSignIn").addEventListener("submit", function (e) {

        // Prevent the form from submitting and refreshing the page
        e.preventDefault()

    // Get the user account information from localStorage (previously saved during account creation
        let localStoredUser = localStorage.getItem("userAccountInfo")

         // Parse the stored stringified object into a JSON object
        let stringObj = JSON.parse(localStoredUser)

        // Get the values from the email and password input fields in the sign-in form
        let mail = document.getElementById("userEmailSignIn").value
        let pass = document.getElementById("userPasswordSignIn").value

         // Try to find a matching user in the fetched users API data based on email and password
        let findUsers = usersApiData.find(user => user.email === mail && user.password === pass)

        // If the user is found in the API data
        if (findUsers){

     // Redirect the user to the main index page after successful login  
            window.location.href = "/html_files/index.html";
        } 
 // If the user is not found in the API, check if the local storage account info matches       
        else{

            // If the local storage data matches, log in the user and redirect
            if (stringObj.userEmail === mail && stringObj.userPassword === pass) {
                  window.location.href = "/html_files/index.html";
            } else {

      // If neither the API nor local storage match, show an alert indicating invalid credentials
         alert("sorry for the trouble but your email or password not found. Please create an account first")
            }
        }
        
    })
    
}

// Call the 'dataAPI' function to execute the above logic
dataAPI()
