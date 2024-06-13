//U46368100
// prevents script from running before the loading of DOM which should prevent errors
document.addEventListener("DOMContentLoaded" , (event) =>{

    document.getElementById("userRegistrationForm").addEventListener("submit" , (event)=>{
        //prevents default form submission
        event.preventDefault();
        //Receive inputs from form submission
        const userName=document.getElementById("userName").value;
        const emailAddress=document.getElementById("emailAddress").value;
        const date=document.getElementById("date").value;
        const veg=document.getElementById("veg").checked;
        const nonVeg=document.getElementById("nonVeg").checked;
        const vegan=document.getElementById("vegan").checked ;

        //Dynamically create user registration form elements
        document.getElementById("userRegistrationSubmission").innerHTML =
        ` <h3>User Registration Completed!</h3>
        <b>User Name:</b> ${userName} <br>
        <b> Email Address:</b> ${emailAddress}<br>
        <b> Date:</b> ${date} <br>
        <b>Meal Preferences:</b><br>
        Vegetarian: ${veg} <br>
        Non-Vegetarian: ${nonVeg} <br>

        Vegan: ${vegan} <br>`

        //Clears values in the form after submission.
        document.getElementById("userRegistrationForm").reset();

        
    



    })
})






