var splitzee = window.location.href.split("Register.html?");
var something = splitzee[1];
window.onload = function () {
    if (something === "course=month") {
        document.getElementById("month").checked = true;
        document.getElementById('months').style.display = 'block';
        setMonth();
    } //endif
    else if (something === "course=hYear") {
        document.getElementById("hYear").checked = true;
        document.getElementById('half').style.display = 'block';
        setHalfYear();
    } //endif
    else {
        // Since we are coming in at this page from nowhere 
        // in particular, go ahead and sign them up for the 
        // most expensive option until they change it.  ALso 
        // makes the Paypal stuff work as there has to be a 
        // price to send to paypal
        document.getElementById("fYear").checked = true;
        setYear();
    }
}

//This below must match EXACTLY to Paypal's selection text */}
var PayPalYearText = "Year";
var PayPalHalfYearText = "Half Year";
var PayPalMonthText = "Month";

function show1() {
    document.getElementById('months').style.display = 'none';
    document.getElementById('half').style.display = 'none';
    // This corresponds to the $400 class
    //This below must match EXACTLY to Paypal's selection text
    document.getElementById('PayPalClassAmount').value =
        PayPalYearText;
}

function show2() {
    document.getElementById('months').style.display = 'block';
    document.getElementById('half').style.display = 'none';
    // This corresponds to the $150 class
    //This below must match EXACTLY to Paypal's selection text
    document.getElementById('PayPalClassAmount').value =
        PayPalMonthText;
    // set the month paypal text box
    setMonth();
}

function show3() {
    document.getElementById('half').style.display = 'block';
    document.getElementById('months').style.display = 'none';
    // This corresponds to the $200 class
    //This below must match EXACTLY to Paypal's selection text
    document.getElementById('PayPalClassAmount').value = PayPalHalfYearText;
    // set the half year paypal text box
    setHalfYear();
}

function other(middleSchool) {
    if (middleSchool == "Other") {
        document.getElementById('otherSchool').style.display = 'block';
        SetPayPalSchoolText("");
    } else {
        document.getElementById('otherSchool').style.display = 'none';
        SetPayPalSchoolText(middleSchool);
    }
}

function SetPayPalSchoolText(SchText) {
    document.getElementById('PayPalSchool').value = SchText;
}

function setYear() {
    document.getElementById('PayPalClassAmount').value = PayPalYearText;
}

function setHalfYear() {
    document.getElementById('PayPalHalfYear').value = document.getElementById('halfYearSelector').value;
    document.getElementById('PayPalClassAmount').value = PayPalHalfYearText;
}

function setMonth() {
    document.getElementById('PayPalMonth').value = document.getElementById('MonthSelector').value;
    document.getElementById('PayPalClassAmount').value = PayPalMonthText;
}

function SetFormSpreeReplyTo() {
    console.log("in SetFormSpreeReplyTo")
    var varEmail = document.getElementById('email').value;
    console.log("Email: " + varEmail);
    document.getElementById('formSpreeReplyTo').value = varEmail;
    console.log("Element value: " + document.getElementById('formSpreeReplyTo').value);
    SetFormSpreeCC(varEmail);
}

function SetFormSpreeCC(paraEmail) {
    console.log("in SetFormSpreeCC")
    console.log("Email: " + paraEmail);
    document.getElementById('formSpreeCC').value = paraEmail;
    console.log("Element value: " + document.getElementById('formSpreeCC').value);
}