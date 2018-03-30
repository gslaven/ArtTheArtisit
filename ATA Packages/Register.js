const nodemailer = require('nodemailer');
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
    console.log(SchText)
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

function sendMail() {
    console.log("In sendMail")
    var transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: 'GasTest@yahoo.com',
            pass: 'RememberMe!'
        }
    });
    var mailOptions = {
        from: document.getElementById('months').style.display,
        to: 'GasTest@yahoo.com',
        subject: 'Sending Email using Node.js ',
        text: 'That was easy!'
    };
    var link = "mailto:gslaven@comcast.net" +
        "&subject=" + encodeURI("Registration for the After School Art Program (ASAP") +
        "&body=" + encodeURI(Body());
    window.location.href = link;
    window.open(link);
    console.log(link);
    console.log(Body());
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent:' + info.response);
        }
    });
}

function Body() {
    var returnBody = "";
    returnBody = document.getElementsByName('on0').value +
        "\n\r";
    returnBody = document.getElementsByName('os0').value +
        "\n\r";
    returnBody = document.getElementsByName('on1').value +
        "\n\r";
    returnBody = document.getElementsByName('os1').value +
        "\n\r";
    returnBody = document.getElementsByName('on2').value +
        "\n\r";
    returnBody = document.getElementsByName('os2').value +
        "\n\r";
    returnBody = document.getElementsByName('on3').value +
        "\n\r";
    returnBody = document.getElementsByName('os3').value +
        "\n\r";
    returnBody = document.getElementsByName('on4').value +
        "\n\r";
    returnBody = document.getElementsByName('os4').value +
        "\n\r";
    returnBody = document.getElementsByName('on5').value +
        "\n\r";
    returnBody = document.getElementsByName('os5').value +
        "\n\r";
    returnBody = document.getElementsByName('on6').value +
        "\n\r";
    returnBody = document.getElementsByName('os6').value +
        "\n\r";
    returnBody = document.getElementsByName('on7').value +
        "\n\r";
    returnBody = document.getElementsByName('os7').value +
        "\n\r";
    returnBody = document.getElementsByName('on8').value +
        "\n\r";
    returnBody = document.getElementsByName('os8').value +
        "\n\r";
    returnBody = document.getElementsByName('on9').value +
        "\n\r";
    returnBody = document.getElementsByName('os9').value +
        "\n\r";
    return returnBody;
}