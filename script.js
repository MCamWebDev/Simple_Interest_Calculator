function compute()
    {
    var principle = document.getElementById("principle").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principle * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    if (principle > 0) {
        document.getElementById("result").innerText=("If you deposit $" + principle + ",\nat an interest rate of " + rate + "%.\nYou will recieve an amount of $" + interest + ",\nin the year " + year);
        }
    if (principle <= 0) {
        alert("Enter a number greater than zero")
        }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}    
