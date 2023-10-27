function calculateRD() {
  var principal = parseFloat(document.getElementById("principal").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var time = parseFloat(document.getElementById("time").value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    alert("Please enter valid numbers for all fields.");
    return;
  }

  rate = rate / 100; // Convert to decimal
  var monthlyRate = rate / 12;
  var totalAmount = 0;

  for (var i = 1; i <= time; i++) {
    totalAmount += principal * monthlyRate;
  }

  document.getElementById("result").innerHTML =
    "Total Amount after " + time + " months: ₹" + totalAmount.toFixed(2);
}
