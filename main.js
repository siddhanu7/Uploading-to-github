//created function to be called from HTML

function calculate()
{

    //Display the date and time that the button was clicked
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    //displaying the date with innerHTML     
    document.getElementById("displaydate").innerHTML = dateTime;

    //capturing the bill amount value entered from HTML
    var billAmount = document.getElementById("billAmt").value;
    //capturing the number of guests entered from HTML
    var shareBill = document.getElementById("guest").value;

    //capturing the quality of service entered from HTML
    var serviceQuality = document.getElementById("serviceQual").value;
    
    //Calculating the split for each guest based on teh total bill amount and the tip percentage selected
    var result = (billAmount)/(shareBill)+(billAmount * serviceQuality)/(shareBill);

    //Calculate the tip amount
    var tipAmt= (billAmount * serviceQuality)/(shareBill);
    var finaltip=document.getElementById("tip");
    //Display the tip on the HTML page
    finaltip.innerHTML = "Total Tip Per Person: $"+ tipAmt.toFixed(2);
    
    var finalresult=document.getElementById("total");
    finalresult.innerHTML = "Total Amount Per Person: $"+ result.toFixed(2);
    
  }
