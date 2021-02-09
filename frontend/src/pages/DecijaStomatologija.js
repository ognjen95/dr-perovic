import React, { useEffect } from 'react';
import cards from '../data/UslugeData';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const DecijaStomatologija = () => {
  useEffect(() => {
    document.querySelector('#imgSlideIn').style.bottom = '0';
    document.querySelector('.obastiStranaTextDiv').style.transform =
      'translateX(0%)';
    document.querySelector('.obastiStranaTextDiv').style.opacity = '1';
    document.querySelector('#imgSlideIn').style.opacity = '1';
  });
  return (
    <>
      <div style={cards.deca.style} className="oblatiStranaContainer">
        <div className="oblastiStranaImgDiv">
          <Grid container>
            <Grid className="obastiStranaTextDiv" item xs={12} md={7}>
              <Typography variant="h3">{cards.deca.naslov}</Typography>
              <br />

              <Typography variant="h5">
                Preventivni pregledi. <br />
                Zbrinjavanje zuba zahvaćenih karijesom u mlečnoj, mešovitoj i
                stalnoj denticiji. <br />
                Ekstrakcije mlečnih zuba.
              </Typography>
              <br />
              <Link to={`/kontakt/`}>
                <Button className=" btn-usluge">Zakaži pregled</Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={5}>
              <img
                id="imgSlideIn"
                style={{ width: '50%', right: '-15%' }}
                src={cards.deca.img}
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default DecijaStomatologija;
