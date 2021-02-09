import React from 'react';
import LandingImg from '../components/LandingImg';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const OnamaPage = () => {
  return (
    <>
      <LandingImg
        h2Text={'O nama'}
        h5Text={
          'Stomatološka ordinacija dr Vladimir Perović sa Vama od 2009. godine '
        }
        img={'./images/landingImg2.jpg'}
      />
      <section>
        <Container>
          <Typography variant="h5">
            Stomatološka ordinacija dr Vladimir Perović je osnovana 2009.
            godine. <br />
            Cilj je od početka bio da uz odgovoran i stručan pristup svakom
            pacijentu rešimo probleme zbog kojih su došli kod nas, a da pacijent
            bude zadovoljan predloženim i urađenim. <br />
            Uvek se gledalo da se sarađuje sa odličnom zubotehničkom
            laboratorijom i da se koriste materijali i instrumenti koji će da ti
            najbolje rezultate što se tiče primene, kvaliteta i postojanosti
            urađenog. <br />
            <br />O vašem oralnom zdravlju brinu: <br />
            <ul style={{ paddingLeft: '20px' }}>
              <li>Dr Vladimir Perović</li>
              <li>Dr Maja Panzalović Perović</li>
              <li>Dr Svetlana Perović Palibrk</li>
            </ul>
          </Typography>
        </Container>
      </section>
    </>
  );
};

export default OnamaPage;
