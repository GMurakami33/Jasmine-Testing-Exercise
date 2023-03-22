window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 50000, years: 5, rate: 5}; 
  const amountSubmitted = document.getElementById("loan-amount");
  const yearsSubmitted = document.getElementById("loan-years");
  const rateSubmitted = document.getElementById("loan-rate"); 
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyPayment = (values.rate / 100) / 12; 
  let n = Math.floor(values.years * 12);
  return ((monthlyPayment * values.amount) / 
    (1- Math.pow((1 + monthlyPayment), -n))
    ).toFixed(2);
}
// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let displayMonthly = document.getElementById("monthly-payment");
  displayMonthly.innerText = "$" + monthly;
}
