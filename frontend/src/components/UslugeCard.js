import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const UslugeCard = ({ img, naslov, text, link, styles, imgStyles }) => {
  return (
    <>
      <div style={styles} className="cardContainer">
        <div className="cardImgDiv">
          <Grid container>
            <Grid className="cardTextDiv" item xs={12} sm={8}>
              <Typography variant="h4">{naslov}</Typography>
              <Typography variant="h6">{text}</Typography>
              <Link to={`/oblasti/${link}`}>
                <Button
                  style={{ marginBottom: '3rem' }}
                  className=" btn-usluge"
                >
                  Pogledaj vise
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img style={imgStyles} src={img} alt="" />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default UslugeCard;
