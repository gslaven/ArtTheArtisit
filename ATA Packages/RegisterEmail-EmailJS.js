console.log("In RegisterEmail");
import SmtpClient from 'emailjs-smtp-client';
console.log("Just Set SmtpClient Variable");

function sendRegistrationEMail() {
    console.log("In sendMail");
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
    var link = "mailto:GasTest@yahoo.com" +
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
    console.log(returnBody);
    return returnBody;
}