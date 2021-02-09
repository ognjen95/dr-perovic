import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const LandingImg = ({ img, h2Text, h5Text, btnStyle }) => {
  useEffect(() => {
    document.querySelector('.allPageLandingTextDiv').style.transform =
      'translateX(0%)';
    document.querySelector('.allPageLandingTextDiv').style.opacity = '1';
  }, []);

  return (
    <div
      className="allPageLandingImg"
      style={{
        backgroundImage: img,
      }}
    >
      <Container>
        <div className="allPageLandingTextDiv">
          <Typography variant="h2">{h2Text}</Typography>
          <Typography variant="h5">{h5Text}</Typography>
          {btnStyle && (
            <Link to={`/kontakt/`}>
              <Button style={{ marginTop: '2rem' }} className=" btn-usluge">
                Zakaži pregled
              </Button>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default LandingImg;
