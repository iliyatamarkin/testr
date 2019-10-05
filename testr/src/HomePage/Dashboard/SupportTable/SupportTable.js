import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles(theme => ({
  head: {
    color: '#b4bac6',
  },
  body: {
    fontSize: 8,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const rows = [
  createData(
    'Cecilia Welch',
    'heather_keeling@gottlieb.com',
    '01:06AM',
    '215-593-5846',
    'South Mariane'
  ),
  createData(
    'Cecilia Welch',
    'heather_keeling@gottlieb.com',
    '01:06AM',
    '215-593-5846',
    'South Mariane'
  ),
  createData(
    'Cecilia Welch',
    'heather_keeling@gottlieb.com',
    '01:06AM',
    '215-593-5846',
    'South Mariane'
  ),
  createData(
    'Cecilia Welch',
    'heather_keeling@gottlieb.com',
    '01:06AM',
    '215-593-5846',
    'South Mariane'
  ),
  createData(
    'Cecilia Welch',
    'heather_keeling@gottlieb.com',
    '01:06AM',
    '215-593-5846',
    'South Mariane'
  ),
];

function createData(name, email, time, phone_number, city) {
  return { name, email, time, phone_number, city };
}

export default class SupportTable extends React.Component {
  render() {
    return (
      <div>
        <header>Support Requests</header>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell align="left">EMAIL</StyledTableCell>
              <StyledTableCell align="left">TIME</StyledTableCell>
              <StyledTableCell align="left">PHONE NUMBER</StyledTableCell>
              <StyledTableCell align="left">CITY</StyledTableCell>
              <StyledTableCell align="left">STATUS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{row.time}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.phone_number}
                </StyledTableCell>
                <StyledTableCell align="left">{row.city}</StyledTableCell>
                <StyledTableCell align="left">
                  <Button variant="contained" color="primary">
                    Send
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
