const express = require('express');
const dotenv = require('dotenv');
const app = express();

const sendMail = require('./mail');

dotenv.config();

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.post('/email', (req, res) => {
  // name,email, phone,  text, cb
  const { name, email, number, text } = req.body;
  console.log('Data: ', req.body);

  sendMail(name, email, number, text, function (err, data) {
    if (err) {
      console.log(err);
      console.log(process.env.PASSWORD);
      console.log(process.env.EMAIL);

      res.status(500).json({ message: 'Internal Error' });
    } else {
      res.json({ message: 'Vaša poruka je poslana' });
    }
  });
});

app.listen(5000, console.log('Server radi na portu 5000'));
