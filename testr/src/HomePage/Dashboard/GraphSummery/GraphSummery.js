import React from 'react';
import './GraphSummery.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

export default class GraphSummary extends React.Component {
  graphColorsMap = {
    'Ratings by category': 'pink',
    'General results': 'blue',
  };

  render() {
    const title = this.props.type;
    const color = this.graphColorsMap[this.props.type];

    return (
      <Grid
        container
        justify="center"
        direction="row"
        className="Line"
        alignItems="center"
      >
        <Grid item xs={12}>
          <div className="Title">{title}</div>
        </Grid>
        <Grid item container spacing={1} xs={8}>
          <Grid item xs={7}>
            <div className="Number">9401</div>
            <div className="Followers">Followers</div>
          </Grid>
          <Grid item xs={12}>
            <img src={color + '_charts/graph.svg'} className="Graph"></img>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <img
            src={color + '_charts/pie_chart.svg'}
            className="Pie-chart"
          ></img>
        </Grid>
      </Grid>
    );
  }
}
