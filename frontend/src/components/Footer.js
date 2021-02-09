import React from 'react';
import cards from '../data/UslugeData';
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <Container>
        <Grid container justify="space-evenly">
          <Grid item xs={12} md={3}>
            <h3
              style={{
                color: 'white',
                fontWeight: '600',
              }}
            >
              Stomatološka ordinacija <br /> dr Vladimir Perović
            </h3>
            <br />
          </Grid>
          <Grid item xs={12} md={3}>
            <ul>
              <li>
                <Link to={`/`}>Naslovna</Link>
              </li>
              <li>
                <Link to={`/o-nama`}>O nama</Link>
              </li>
              <li>
                <Link to={`/usluge`}>Usluge</Link>
              </li>
              <li>
                <Link to={`/kontakt`}>Kontakt</Link>
              </li>
            </ul>
            <br />
          </Grid>
          <Grid item xs={12} md={3}>
            <ul>
              {Object.keys(cards).map((item, index) => (
                <Link key={index} to={`/oblasti/${cards[item].link}`}>
                  <li>{cards[item].naslov}</li>
                </Link>
              ))}
            </ul>
            <br />
          </Grid>

          <Grid item xs={12} md={3}>
            <ul>
              <li>
                <i className="fa fa-map-marker  fa-lg" aria-hidden="true"></i>{' '}
                Sarajevska 73, Beograd
              </li>
              <li>
                <i className="fa fa-phone fa-lg" aria-hidden="true"></i> +381 64
                555 555
              </li>
              <li>
                <i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
                perovic@gmail.com
              </li>
              <li>
                <a
                  href="https://www.facebook.com/ordinacijaperovic/"
                  target="blank"
                >
                  <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>{' '}
                  /ordinacijaperovic
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
