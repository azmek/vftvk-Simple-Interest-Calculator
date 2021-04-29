// This file calculate the interest on an input from the user based on rates and number of years
// Also highlights the results
function compute()
{
    //getting the values from the user
    var amount = document.getElementById("principal").value;
    // if the input is 0 or negative an alert for the user and rest focus
    if (amount <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").value = "";
        document.getElementById("principal").focus();
        return false;
    }
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value
    //calculating interest
    var interest = principal * years * rate/100
    //converts and calculate the users
    var year = new Date().getFullYear()+parseInt(years);
    
    //dislaying the results
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
}
//the following makes the slider dynamic that changes the interest as the user slides it
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
