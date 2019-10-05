import React from 'react';
import Grid from '@material-ui/core/Grid';

const terms = [85.08, 1.76, 33.42, 75.11];

export default class Terms extends React.Component {
  getTerms() {
    const items = terms.map((item, key) => (
      <div>
        term{key} {item}
      </div>
    ));

    return items;
  }

  render() {
    return (
      <Grid container justify="center" alignItems="center">
        {this.getTerms()}
      </Grid>
    );
  }
}
