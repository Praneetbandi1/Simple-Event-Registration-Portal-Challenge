//U46368100
// prevents script from running before the loading of DOM which should prevent errors
document.addEventListener("DOMContentLoaded" , (event) =>{

    document.getElementById("userRegistrationForm").addEventListener("submit" , (event)=>{
        //prevents default form submission
        event.preventDefault();
        //Receive inputs from form submission
        const userName=document.getElementById("userName").value;
        const emailAddress=document.getElementById("emailAddress").value;
        const date=document.getElementById("emailAddress").value;
        const veg=document.getElementById("veg").checked;
        const nonVeg=document.getElementById("nonVeg").checked;
        const vegan=document.getElementById("vegan"). checked ;

    }






