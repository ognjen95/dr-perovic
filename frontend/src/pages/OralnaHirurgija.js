import React, { useEffect } from 'react';
import cards from '../data/UslugeData';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const OralnaHirurgija = () => {
  useEffect(() => {
    document.querySelector('#imgSlideIn').style.bottom = '0';
    document.querySelector('.obastiStranaTextDiv').style.transform =
      'translateX(0%)';
    document.querySelector('.obastiStranaTextDiv').style.opacity = '1';
    document.querySelector('#imgSlideIn').style.opacity = '1';
  });
  return (
    <>
      <div style={cards.hirurgija.style} className="oblatiStranaContainer">
        <div className="oblastiStranaImgDiv">
          <Grid container>
            <Grid className="obastiStranaTextDiv" item xs={12} md={7}>
              <Typography variant="h3">{cards.hirurgija.naslov}</Typography>
              <br />

              <Typography variant="h5">
                Klasične ekstrakcije (vađenja) zuba. <br />
                Separacija zubnih korenova. <br />
                Hirurško vađenje umnjaka.
              </Typography>
              <br />

              <Link to={`/kontakt/`}>
                <Button className=" btn-usluge">Zakaži pregled</Button>
              </Link>
            </Grid>
            <Grid itemitem xs={12} md={5}>
              <img
                id="imgSlideIn"
                style={cards.hirurgija.imgStyle}
                src={cards.hirurgija.img}
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default OralnaHirurgija;
