import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Button1 from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

//import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
    Typography,
    AppBar,
    Toolbar,
    TextField,
    Box
  } from "@mui/material";

function Payment() {

    const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };


    const mystyle = {
        color: "white",
        backgroundColor: "#01d28e",
        fontFamily: "Arial"
      };
      const stl1={
          backgroundColor: "#01d28e",
          height: 200,
          width:200
      }
    return (

        <div>
            Welcome to Payment page
            <AppBar>
        <toolbar>
          <h1>PAYMENT FORM </h1>
        </toolbar>
      </AppBar>

            {/* <center >
                <Form style={{mystyle}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </center>
            <div className="center" style={{stl1}}>

            <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
                efawefawgfawgfa


            </div> */}
            <center>
            <form onSubmit={() => alert("saved")}  style={{margin: "100px", }}>
    
        <Box sx={{ m: 1}}>
      <FormControl  style={{ width: "200px", margin: "5px" }}>
        <InputLabel id="demo-simple-select-label">Transfer Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"CUSTOMER"}>CUSTOMER TRANSFER</MenuItem>
          <MenuItem value={"BANK TRANSFER"}>BANK TRANSFER</MenuItem>
          
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ m: 1}}>
      <FormControl  style={{ width: "200px", margin: "5px" }}>
        <InputLabel id="demo-simple-select-label">Message Code</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>

    <TextField
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="Amount"
          variant="outlined"
        />
        <br />

    <br/>
        <Button1 variant="contained" color="success">
          Add Transfer fee
        </Button1>
            &nbsp;  &nbsp;  &nbsp;  &nbsp; 
        <Button1 variant="contained" color="success">
          Transfer
        </Button1>
      </form>

      

            </center>


           


            


        </div>
    )
}

export default Payment
