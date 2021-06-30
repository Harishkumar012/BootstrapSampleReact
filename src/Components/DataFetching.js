/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from "react";
// import axios from "axios";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from 'react-redux'
import {fetchUsers} from '../Actions/userActions'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const mapStateToProps = state =>    {
  return {
      userData : state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchUsers:() => dispatch(fetchUsers())
  }
}


function DataFetching({userData,fetchUsers}) {
  const classes = useStyles();
  useEffect(()=>
  {
      fetchUsers()
  },[])
  return userData.loading ?  (
    <h2>Loading</h2>
) :userData.error ?( <h2>{userData.error}</h2>)
:(
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Email&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {userData &&
             userData.map((user) =>
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="left">{user.name}</StyledTableCell>
              <StyledTableCell align="left">{user.email}</StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
)
}


export default connect (mapStateToProps,mapDispatchToProps) (DataFetching)