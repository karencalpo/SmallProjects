var loan_amt_id = document.getElementById('loan_amt');
var annual_interest_id = document.getElementById("annual_interest");
var repayment_period_id = document.getElementById('repayment_period');
var zipcode_id = document.getElementById('zipcode');
var phone_id = document.getElementById('phone');

loan_amt_id.addEventListener("blur", validate_dollar);
annual_interest_id.addEventListener("blur", validate_interest);
repayment_period_id.addEventListener("blur", validate_years);
zipcode_id.addEventListener("blur", validate_zipcode);
phone_id.addEventListener("blur", validate_phone);

function validate_dollar() {
    var loan_amt = loan_amt_id.value;
    var dollar_exp = /^\$?\d+(\.(\d{2}))?$/;
    
    if(!dollar_exp.test(loan_amt) && loan_amt_id.value !== undefined) {
        alert("Please enter a valid dollar amount without a dollar sign for the loan (no dollar signs or commas).");
        loan_amt_id.value = undefined;
    } 
}

function validate_interest() {
    var annual_interest = annual_interest_id.value;
    var interest_exp = /^100$|^\d{0,2}(\.\d{1,2})? *%?$/;
    
    if(!interest_exp.test(annual_interest) && annual_interest_id.value !== undefined) {
        alert("Please enter a valid percentage for the interest (values between 1-100 without a % sign up to two decimal places).");
        annual_interest_id.value = undefined;
    } 
}

function validate_years() {
    var repayment_period = repayment_period_id.value;
    if(isNaN(parseFloat(repayment_period)) && repayment_period_id.value !== undefined) {
        alert("Please a valid value for the number of years.");
        repayment_period_id.value = undefined;
    } 
}

function validate_zipcode() {
    var zipcode = zipcode_id.value;
    var zipcode_exp = /^\d{5}$/;
    
    if(!zipcode_exp.test(zipcode) && zipcode_id.value !== undefined) {
        alert("Please enter a valid zipcode.");
        zipcode_id.value = undefined;
    } 
}

function validate_phone() {
    var phone = phone_id.value;
    var phone_exp = /[0-9]/;
    
    if(!phone_exp.test(phone) && phone_id.value !== undefined) {
        alert("Please enter a valid phone number.");
        phone_id.value = undefined;
    } 
}

function Calculate() {

    /*
	* This script defines the calculate() function called by the event handlers
	* in HTML above. The function reads values from <input> elements, calculates
	* loan payment information, displays the results in <span> elements. It also
	* saves the user's data, displays links to lenders, and draws a chart.
	*/
    
    var loan = Number((loan_amt_id.value).replace(/[^0-9.]/g, ''));
    var interest = Number((annual_interest_id.value).replace(/[^0-9.]/g, '')); 
    var repay_period = Number((repayment_period_id.value).replace(/[^0-9.]/g, ''));
    var zip_code = zipcode_id.value;
    
    var monthly_interest = ((interest/100)/12);
    var payment_periods = repay_period*12;
    var other_part = 1/(Math.pow((1+monthly_interest), payment_periods));
    var monthly_payment = loan * (monthly_interest/(1-other_part));
    var total_payment = monthly_payment * (12*repay_period);
    var total_interest = total_payment - loan;

    if(loan_amt_id.value === undefined || annual_interest.value === undefined || repayment_period_id.value === undefined || zipcode_id.value === undefined) {
        alert("Please fill in values for Loan Amount, Annual Interest, Repayment Period, and Zip Code.");
    } else {
        document.getElementById('monthly_payment').value = monthly_payment.toFixed(2);
        document.getElementById('total_payment').value = total_payment.toFixed(2);
        document.getElementById('total_interest').value = total_interest.toFixed(2);
    }
}

