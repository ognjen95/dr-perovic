import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let data = {
      name,
      email,
      number,
      text,
    };
    console.log(data);
    try {
      const res = await axios.post('/email', data, config);
      console.log(res);
      // if (res.status === 200) {
      //   setSuccess(true);
      //   document.querySelector('#alertMessage').style.display = 'block';
      //   setAlert('Vaša poruka je poslana!');
      // } else {
      //   setSuccess(false);
      //   setAlert('Poruka nije poslana, pokušajte kasnije.');
      //   document.querySelector('#alertMessage').style.display = 'block';
      // }
    } catch (err) {
      // setAlert('Poruka nije poslana, pokušajte kasnije.');
      // document.querySelector('#alertMessage').style.display = 'block';
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <form noValidate onSubmit={submitHandler} autoComplete="off">
          <TextField
            value={name}
            required
            type="name"
            id="standard-required"
            label="Unesite Vaše ime i prezime"
            size="medium"
            fullWidth={true}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            type="email"
            value={email}
            required
            id="standard-required"
            label="Unesite Vašu email adresu"
            size="medium"
            fullWidth={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="phone"
            value={number}
            id="standard-basic"
            label="Unesite Vaš broj telefona"
            size="medium"
            fullWidth={true}
            onChange={(e) => setNumber(e.target.value)}
          />
          <TextField
            value={text}
            id="standard-multiline-static"
            label="Postavite nam pitanje"
            size="medium"
            multiline
            rows={4}
            fullWidth={true}
            onChange={(e) => setText(e.target.value)}
          />
          <Button size="large" variant="outlined" className="btn">
            Pošalji
          </Button>
        </form>
      </Container>
    </>
  );
};

export default ContactForm;
