import React from 'react';
import GraphSummary from './GraphSummery/GraphSummery';
import SupportTable from './SupportTable/SupportTable';
import Terms from './Terms/Terms';
import './Dashboard.css';
import Grid from '@material-ui/core/Grid';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="Mask">
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <GraphSummary type={'General results'}></GraphSummary>
          </Grid>
          <Grid item xs={5}>
            <GraphSummary type={'Ratings by category'}></GraphSummary>
          </Grid>
          <Grid item xs={2}>
            <Terms></Terms>
          </Grid>
          <Grid item xs={12}>
            <SupportTable></SupportTable>
          </Grid>
        </Grid>
      </div>
    );
  }
}
