function calculateEMI() {

  let P = document.getElementById("amount").value;
  let annualRate = document.getElementById("rate").value;
  let years = document.getElementById("time").value;

  let R = (annualRate / 12) / 100;
  let N = years * 12;
  if(P <= 0 || !P){
  alert("Enter valid amount");
  return;
}

  let EMI = (P * R * Math.pow(1 + R, N)) /
            (Math.pow(1 + R, N) - 1);

  document.getElementById("rresult").innerText =
    "Monthly EMI: ₹ " + EMI.toFixed(2);
   document.getElementById("ramt").innerText = "₹"+P;
   document.getElementById("rtime").innerText = years+"years";
   document.getElementById("rrate").innerText = annualRate+"%";

    
}