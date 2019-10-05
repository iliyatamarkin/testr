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

const supportRequests = [
  {
    name: 'Cecilia Welch',
    email: 'heather_keeling@gottlieb.ca',
    timestamp: '2012-04-23T01:06:43.511Z',
    phoneNumber: '215-293-5846',
    city: 'Southe Mariane',
    status: 'sent',
  },
  {
    name: 'Sara Glover',
    email: 'floyd_brakus@lindgren.com',
    timestamp: '2012-04-23T00:22:43.511Z',
    phoneNumber: '057-812-3947',
    city: 'East Maryam',
    status: 'sent',
  },
  {
    name: 'Harriett Morgan',
    email: 'jabari.kilback@nelson.tv',
    timestamp: '2012-04-23T12:22:43.511Z',
    phoneNumber: '866-668-0327',
    city: 'Monserratmouth',
    status: 'sent',
  },
  {
    name: 'Susie Curry',
    email: 'theo_gleichner@kaia.org',
    timestamp: '2012-04-23T07:56:43.511Z',
    phoneNumber: '647-851-5280',
    city: 'Lonnyburgh',
    status: 'sent',
  },
  {
    name: 'Edgar Greer',
    email: 'ankunding_ralph@gmail.com',
    timestamp: '2012-04-23T08:35:43.511Z',
    phoneNumber: '985-747-0063',
    city: 'Schmittfurt',
    status: 'unsent',
  },
  {
    name: 'Minerva Massey',
    email: 'lia_purdy@yahoo.com',
    timestamp: '2012-04-23T03:24:43.511Z',
    phoneNumber: '488-514-5012',
    city: 'South Lori',
    status: 'unsent',
  },
];
const rows = supportRequests.map(item =>
  createData(
    item.name,
    item.email,
    item.timestamp,
    item.phoneNumber,
    item.city,
    item.status
  )
);

function createData(name, email, time, phone_number, city, status) {
  return { name, email, time, phone_number, city, status };
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
                    {row.status == 'unsent' ? 'Send' : 'Sent'}
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
