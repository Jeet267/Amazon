let account = document.querySelector(".account-login");
let main = document.querySelector(".account-section");
let profile_data = localStorage.getItem("loginUser");
let parsed_profile_data = JSON.parse(profile_data);
let accountlist = document.querySelector(".account_list");

// let logout = document.createElement('div')

let userNameDiv = document.createElement("div");
if (parsed_profile_data) {
  // Hide the original account login div
  account.style.display = "none";

  // Create a new div for the user's name
  
  userNameDiv.classList.add("user-name");
  userNameDiv.textContent = `Hi ${parsed_profile_data[0].namehai}`;


  // Insert the new div where the original account login div was
  account.parentNode.insertBefore(userNameDiv, account.nextSibling);

}

accountlist.addEventListener("click",()=>{
    accountlist.innerHTML = `<div>
<p>${parsed_profile_data[0].email}</p>
<p>${parsed_profile_data[0].namehai}</p>
<button class="logout_1">Logout</button>

</div>`;
let logout= accountlist.querySelector(".logout_1")
logout.addEventListener("click",()=>{
    account.style.display = "block";
    userNameDiv.style.display ='None'
    accountlist.style.display ='None'
    localStorage.removeItem("loginUser")
}
)
})



// let profile_data=[]
// const local = localStorage.getItem("infor")
// const pass = JSON.parse(local)

// console.log(pass)
// let account = document.querySelector(".account-login")
// let main = document.querySelector('.account-section')
// let profile_data = localStorage.getItem("loginUser")
// let parsed_profile_data = JSON.parse(profile_data)
// // console.log(parsed_profile_data[0].namehai)
// let divi = document.createElement("div")

// if (parsed_profile_data){
//     // account.textContent = `Hi ${parsed_profile_data[0].namehai}`
//     account.style.display = 'none'
//     account.innerHTML = `<p>  Hi ${parsed_profile_data[0].namehai}</p>`

//     divi.appendChild(main)
//     // console.log(divi)
// }

// if (parsed_profile_data){
//     account.style.display = 'none'
// }


// async function fetchdata(){
//     const response = await fetch('https://fakestoreapi.com/products')
//     // console.log(response)
//     const data = await response.json()
//     console.log(data)


// }
// fetchdata();



