import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  PieChart: {
    width: '54.5px',
    height: '54.5px',
    'object-fit': 'contain',
  },

  Graph: {
    width: '135px',
    height: '50.5px',
    'object-fit': 'contain',
  },

  Title: {
    'font-family': 'Lato',
    'font-size': '7.5px',
    'font-weight': 'bold',
    'font-style': 'normal',
    'font-stretch': 'normal',
    'line-height': 'normal',
    'letter-spacing': 'normal',
    color: '#354052',
  },
  Followers: {
    'font-family': 'Lato',
    'font-size': '7.5px',
    'font-weight': 'normal',
    'font-style': 'normal',
    'font-stretch': 'normal',
    'line-height': '1.93',
    'letter-spacing': '0.05px',
    color: '#8a96a0',
    display: 'inline-block',
  },
  Number: {
    width: '34px',
    height: '16px',
    'font-family': 'Helvetica',
    'font-size': '13.5px',
    'font-weight': 'normal',
    'font-style': 'normal',
    'font-stretch': 'normal',
    'line-height': 'normal',
    'letter-spacing': 'normal',
    ' text-align': 'center',
    color: '#37394c',
    display: 'inline-block',
  },

  Line: {
    border: 'solid 0.5px #f0f0f0',
  },
}));

const GraphSummary = props => {
  const graphColorsMap = {
    'Ratings by category': 'pink',
    'General results': 'blue',
  };

  const classes = useStyles();

  const title = props.type;
  const color = graphColorsMap[props.type];

  return (
    <Grid
      container
      justify="center"
      direction="row"
      className={classes.Line}
      alignItems="center"
    >
      <Grid item xs={12}>
        <div className={classes.Title}>{title}</div>
      </Grid>
      <Grid item container spacing={1} xs={8}>
        <Grid item xs={7}>
          <div className={classes.Number}>9401</div>
          <div className={classes.Followers}>Followers</div>
        </Grid>
        <Grid item xs={12}>
          <img
            src={color + '_charts/graph.svg'}
            className={classes.Graph}
          ></img>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <img
          src={color + '_charts/pie_chart.svg'}
          className={classes.PieChart}
        ></img>
      </Grid>
    </Grid>
  );
};

export default GraphSummary;
