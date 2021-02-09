import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

export default function UslugeAccordion({ naslov, usluge }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion
        style={{
          border: '2px solid  rgba(0, 210, 255, 0.1)',
          marginBottom: '4px',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5">{naslov}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
            <ul>
              {usluge.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
