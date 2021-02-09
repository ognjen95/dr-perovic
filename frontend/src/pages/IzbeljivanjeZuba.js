import React, { useEffect } from 'react';
import cards from '../data/UslugeData';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const IzbeljivanjeZuba = () => {
  useEffect(() => {
    document.querySelector('#imgSlideIn').style.bottom = '0';
    document.querySelector('.obastiStranaTextDiv').style.transform =
      'translateX(0%)';
    document.querySelector('.obastiStranaTextDiv').style.opacity = '1';
    document.querySelector('#imgSlideIn').style.opacity = '1';
  });
  return (
    <>
      <div style={cards.izbeljivanje.style} className="oblatiStranaContainer">
        <div className="oblastiStranaImgDiv">
          <Grid container>
            <Grid className="obastiStranaTextDiv" item xs={12} md={7}>
              <Typography variant="h3">{cards.izbeljivanje.naslov}</Typography>
              <br />

              <Typography variant="h5">
                Radi se u stomatološkoj ordinaciji, kontrolisano. <br />
                Tretman traje oko sat vremena.
                <br />
                Pre intervencije se radi priprema da bi period po završetku bio
                bezbolan ili bezbolniji. <br />
              </Typography>
              <br />

              <Link to={`/kontakt/`}>
                <Button className=" btn-usluge">Zakaži pregled</Button>
              </Link>
            </Grid>
            <Grid item item xs={12} md={5}>
              <img
                id="imgSlideIn"
                style={{ width: '50%' }}
                src={cards.izbeljivanje.img}
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default IzbeljivanjeZuba;
