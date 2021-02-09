import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import ContactForm from '../components/ContactForm';
import Gmaps from '../components/Gmaps';
import LandingImg from '../components/LandingImg';
const ContactPage = () => {
  return (
    <>
      <LandingImg
        h2Text={'Kontakt'}
        h5Text={'Zakažite pregled. Očekujemo Vas. '}
        img={'./images/landingImg2.jpg'}
      />

      <section>
        <div className="contactDiv">
          <Container>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Container>
                  <Grid container>
                    <Grid item xs={12}>
                      <Grid className="contactGrid" container>
                        <Grid style={{ paddingRight: '5%' }}>
                          <i
                            className="fa fa-map-marker  fa-lg"
                            aria-hidden="true"
                          ></i>{' '}
                          Sarajevska 73, Beograd <br />
                          <i
                            className="fa fa-phone fa-lg"
                            aria-hidden="true"
                          ></i>{' '}
                          +381 64 555 555
                        </Grid>
                        <Grid item>
                          <i
                            className="fa fa-envelope-o fa-lg"
                            aria-hidden="true"
                          ></i>
                          perovic@gmail.com <br />
                          <a
                            href="https://www.facebook.com/ordinacijaperovic/"
                            target="blank"
                          >
                            <i
                              className="fa fa-facebook fa-lg"
                              aria-hidden="true"
                            ></i>{' '}
                            /ordinacijaperovic
                          </a>
                        </Grid>
                      </Grid>

                      <br />
                    </Grid>
                    <Grid item xs={12}>
                      <div className="googleMaps">
                        <Gmaps />
                      </div>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid item xs={12} md={6}>
                <Container>
                  <Typography variant="h4">Postavite nam pitanje.</Typography>
                </Container>
                <ContactForm />
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
