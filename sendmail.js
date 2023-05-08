const nodemailer = require("nodemailer");

function generateOTP() {
  let min = 1000; // minimum value of the OTP
  let max = 9999; // maximum value of the OTP
  let otp = Math.floor(Math.random() * (max - min + 1)) + min;
  return otp.toString();
}

function sendmail(email) {
  // create reusable transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "vyankatesht246@gmail.com", // your SMTP username
      pass: "blpjenkognaefeep", // your SMTP password
    },
  });

  // setup email data
  let strotp = generateOTP();
  let mailOptions = {
    from: "vyankatesht246@gmail.com", // sender address
    to: email, // list of receivers
    subject: "OTP for registration", // Subject line
    text: "This is a varification otp" + strotp, // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent: %s", info.messageId);
    }
  });
}
