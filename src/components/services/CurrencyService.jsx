import React, { Component } from 'react'
import axios from 'axios';

// import {
//   Typography,
//   AppBar,
//   Toolbar,
//   TextField,
//   Box, Paper,
//   Button
// } from "@mui/material";

// const id=13645221972859;
 const get = 'http://localhost:8080/customer'
// const current = new Date();
// const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
// const day = current.getDay();

// // var today = new Date();
// //   console.log(today.getDay()

export class CurrencyService extends Component {


  getAllCustomer() {
    return axios.get(get)
  }
  getEmployeeById(employeeId) {
    // return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    return axios.put(get + '/' + employeeId);
  }



  render() {
    return (
      <div></div>
    )
  }
}

export default CurrencyService
