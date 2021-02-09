const nodemailer = require('nodemailer');

const sendMail = (name, email, number, text, cb) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: 'ognjenatlagic95@gmail.com',
    to: 'atlagicognjen@gmail.com',
    subject: 'Kontakt forma sa vebsajta',
    text: `U nastavku su kontakt podaci klijenta i poruka:
           Ime: ${name}
           Email: ${email}
           Broj telefona: ${number}
           Poruka: ${text}
           `,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(err, null);
    }
  });
};

module.exports = sendMail;
