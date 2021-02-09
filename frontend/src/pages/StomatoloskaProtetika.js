import React, { useEffect } from 'react';
import cards from '../data/UslugeData';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const StomatoloskaProtetika = () => {
  useEffect(() => {
    document.querySelector('#imgSlideIn').style.bottom = '0';
    document.querySelector('.obastiStranaTextDiv').style.transform =
      'translateX(0%)';
    document.querySelector('.obastiStranaTextDiv').style.opacity = '1';
    document.querySelector('#imgSlideIn').style.opacity = '1';
  }, []);
  return (
    <>
      <div style={cards.protetika.style} className="oblatiStranaContainer">
        <div className="oblastiStranaImgDiv">
          <Grid container>
            <Grid className="obastiStranaTextDiv" item xs={12} md={7}>
              <Typography variant="h3">{cards.protetika.naslov}</Typography>
              <br />

              <Typography variant="h5">
                Totalnim i skeletiranim protezama se rešava problem bezubosti i
                krezubosti kod pacijenata. <br />
                Skeletirane proteze su u kombinaciji sa fiksnim krunicama i
                mostovima od metalokeramike. <br />
                Krunice i mostovi su metalokeramički i od čiste keramike i svaki
                ima svoje funkcionalne i estetske prednosti.
              </Typography>
              <br />

              <Link to={`/kontakt/`}>
                <Button className=" btn-usluge">Zakaži pregled</Button>
              </Link>
            </Grid>
            <Grid item item xs={12} md={5}>
              <img
                id="imgSlideIn"
                style={{ width: '40%' }}
                src={cards.protetika.img}
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default StomatoloskaProtetika;
