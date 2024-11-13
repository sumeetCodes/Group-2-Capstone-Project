
async function dataAPI() {
    let usersApiData = null

    try {
        let apiUsers = await fetch("https://fakestoreapi.com/users")
        usersApiData = await apiUsers.json()
    } catch (error) {
        
    }

    document.getElementById("formSignIN").addEventListener("submit", function (e) {
        e.preventDefault()

        let localStoredUser = localStorage.getItem("userAccountInfo")
        let stringObj = JSON.parse(localStoredUser)

        let mail = document.getElementById("userEmailSignIN").value
        let pass = document.getElementById("userPasswordSignIN").value

        let findUsers = usersApiData.find(user => user.email === mail && user.password === pass)

        if (findUsers){
            window.location.href = "/html_files/index.html";
        } else{
            if (stringObj.userEmail === mail && stringObj.userPassword === pass) {
                  window.location.href = "/html_files/index.html";
            } else {
                alert("sorry for the trouble but your email or password not found. Please create an account first")
            }
        }
        
    })
    
}


dataAPI()
