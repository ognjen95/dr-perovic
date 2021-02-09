import React from 'react';
import LandingImg from '../components/LandingImg';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import cards from '../data/UslugeData';
import UslugeAccordion from '../components/UslugeAccordion';

const Usluge = () => {
  return (
    <>
      <LandingImg
        h2Text={'Usluge'}
        h5Text={'U našoj ordinaciji vršimo sledeće usluge'}
        img={'./images/landingImg2.jpg'}
      />
      <section>
        <Container>
          <Typography variant="h5">
            {Object.keys(cards).map((i, idx) => (
              <UslugeAccordion
                key={idx}
                naslov={cards[i].naslov}
                usluge={cards[i].usluge}
              />
            ))}
          </Typography>
        </Container>
      </section>
    </>
  );
};

export default Usluge;
