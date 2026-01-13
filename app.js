let url = "https://fzvuyyjubuwxjciaizfb.supabase.co/rest/v1/Leads";
let apikey = "sb_publishable_c1e2nVvSv_CEC--oumH9zg_H5vK8EeU";

const status = document.getElementById("status");
const form = document.getElementById("leadForm");

async function createLead(event) {

event.preventDefault();

let email = document.getElementById("email").value;
let interest_message = document.getElementById("interest_message").value;


let lead = {
  email : email ,
  interest_message : interest_message
};

let response = await fetch(url , {
  method: "POST",
  headers: {
    "apikey" : apikey,
    "Authorization":`Bearer ${apikey}`,
    "Content-Type" : "application/json"
   
  },
  body : JSON.stringify(lead)
})

status.textContent = "Successfully saved!";
form.reset();


}