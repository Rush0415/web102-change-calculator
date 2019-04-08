document.getElementById("calculate-change").onclick = function() {
 
    var received = document.getElementById("amount-received").value;
    var due = document.getElementById("amount-due").value;
    var change = received - due;

    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

   dollars = Math.floor(change/1);
   change = (change % 1).toFixed(2);
console.log(change%1);
   quarters = Math.floor(change/.25);
   change = (change % .25).toFixed(2);

   dimes = Math.floor(change/.10);
   change = (change % .10).toFixed(2);
   
   nickels = Math.floor(change/.05);
   change = (change % .05).toFixed(2);
    
   pennies = Math.floor(change/.01);
   change = (change % .01).toFixed(2);

   document.getElementById("dollars-output").innerText = dollars;
   document.getElementById("quarters-output").innerText = quarters;
   document.getElementById("dimes-output").innerText = dimes;
   document.getElementById("nickels-output").innerText = nickels;
   document.getElementById("pennies-output").innerText = pennies;


}