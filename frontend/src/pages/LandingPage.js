import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import onamaImg from '../images/onamaImg.jpg';
import UslugeCard from '../components/UslugeCard';
import cards from '../data/UslugeData';
import ContactForm from '../components/ContactForm';
import contact from '../images/contact.svg';
import LandingImg from '../components/LandingImg';

const LandingPage = () => {
  return (
    <>
      <div>
        <LandingImg
          h2Text={'Garantovano savršen osmeh'}
          h5Text={'Zakažite pregled. Očekujemo Vas. '}
          img={'./images/landingImg2.jpg'}
          btnStyle={true}
        />
      </div>
      {/* O nama */}
      <section>
        <Container>
          {/* <Typography variant="h1">O nama</Typography> */}

          <Grid container>
            <Grid item xs={12} md={6}>
              <img id="onamaImg" src={onamaImg} alt="" />
            </Grid>
            <Grid className="text-div-center" item xs={12} md={6}>
              <div className="textDiv">
                <Typography variant="h3">Za lepsi osmeh</Typography>
                <Typography variant="h6">
                  Stomatološka ordinacija dr Vladimir Perović je osnovana 2009.
                  godine. Cilj je od početka bio da uz odgovoran i stručan
                  pristup svakom pacijentu rešimo probleme zbog kojih su došli
                  kod nas, a da pacijent bude zadovoljan predloženim i urađenim.
                </Typography>
                <div>
                  <Link to={`/o-nama/`}>
                    <Button
                      size="large"
                      variant="outlined"
                      className="btn btn-onama"
                    >
                      Više o nama
                    </Button>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* Usluge */}
      <section className="uslugeContainer">
        <Container>
          <Typography variant="h2">Usluge koje Vam nudimo</Typography> <br></br>
          <Grid container>
            {Object.keys(cards).map((keyname, index) => (
              <Grid key={index} className="uslugeDiv" item xs={12} md={6}>
                <UslugeCard
                  naslov={cards[keyname].naslov}
                  text={cards[keyname].text}
                  img={cards[keyname].img}
                  styles={cards[keyname].style}
                  imgStyles={cards[keyname].imgStyle}
                  link={cards[keyname].link}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* <div id="uslugesvg"></div>
        <div id="uslugesvg1"></div>
        <div id="uslugesvg2"></div> */}
      </section>

      {/* Contact us */}
      <section>
        <div className="contactDiv">
          <Container>
            <Typography variant="h2">Zakažite pregled</Typography>
          </Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Container>
                <img src={contact} alt="" />{' '}
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactForm />
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
