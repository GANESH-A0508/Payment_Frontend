import React, {useState, useEffect} from 'react'
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Box, Paper,
  Button,Stack, Snackbar, MenuItem
} from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import CurrencyService from './services/CurrencyService';
import axios from 'axios';

const id=13645221972859;
const get = 'http://localhost:8080/customer/{id}/'
const current = new Date();
const date1 = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
const day = current.getDay();

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
const date2=`${year}${'-'}${month<10?`0${month}`:`${month}`}${'-'}${date}`;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


// var today = new Date();
//   console.log(today.getDay()


export default function Homepage() {
  const day2=2;

  const [del,setDel]= useState([])
  const [cusid, setCusid] = useState(13645221972859);
  // const [accholdername, setAccholdername] = useState('');
  const [currency, setCurrency] = React.useState('INR');
  // const [clearbal, setClearbal] = useState('');

  const handleChange1 = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/customer/${cusid}`)
    .then(res => {
      console.log(res)
      setDel(res.data)
      // setAccholdername(res.data.accountholdername)
      // //setCurrency(res.data.currency)
      // setClearbal(res.data.clearbalance)
    })
    .catch(err => {
      console.log(err)
    })
  },[cusid])


//   useEffect(() => {

//     CurrencyService.getEmployeeById(cusid).then((response) =>{
//         // setFirstName(response.data.firstName)
//         // setLastName(response.data.lastName)
//         // setEmailId(response.data.emailId)conversionrate
//         setAccholdername(response.data.accountholdername)
//         setClearbal(response.data.clearbalance)
        

//     }).catch(error => {
//         console.log(error)
//     })
// }, [])

  const [open, setOpen] = React.useState(false);
  const handleClick = (e) => {
    e.preventDefault()
    if(day==0 || day==1){
      setOpen(true);
    }
    else{
      setOpen(false)
    }
    console.log(del.accountholdername);

    // const customer=[accholdername, currency, cusid, clearbal]
    // console.log(customer);

    
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

    return (
        <div>
        
        <br /> <br />

<center style={{ backgroundColor: "red" }}>
          <br />
          <br />

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 320,
                height: 600,
                marginLeft: 2
              },
            }}
          >
            <Paper elevation={0} style={{ marginLeft: 200 }}>
              {day}
              {date2}
<br />
<br />
              <TextField id="filled-basic" label="Today's Date" variant="filled" disabled defaultValue={date1} />  <br />  <br />
              <TextField id="filled-basic" label="Customer ID" variant="filled" type="number" 
              value={cusid}
              onChange = {(e) => setCusid(e.target.value)}
              /> <br /> <br />
              {/* <TextField id="filled-basic"  select label="Account Holder Name" variant="filled" disabled defaultValue="Hello World"/> <br/> <br/>
<TextField id="filled-basic" select label="Filled" variant="filled" type="number" /> */}
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '23ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="filled-basic" select label="Account Holder Name" variant="filled" disabled defaultValue="Ganesh" 
                value={del.accountholdername}
                // onChange = {(e) => setAccholdername(e.target.value)}
                /> <br /> <br />
                <TextField id="filled-basic" select label="Clear Balance" variant="filled" type="number" 
                value={del.clearbalance}
                // onChange = {(e) => setClearbal(e.target.value)}
                /><br /> <br />
                <TextField id="filled-basic" select label="Currency" variant="filled"  defaultValue="INR" 
                value={currency} 
                onChange={handleChange1}
                >
{currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}


                </TextField>
                 <br /> <br />

                {del.accountholdername}
              </Box>
              <Stack spacing={2} sx={{ width: '100%' }}>
                <center>
                <Button variant="contained" onClick={handleClick} style={{width:150}}>CONTINUE -{'>'}</Button>
                </center>
              
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          No transactions allow today!!!!!
        </Alert>
      </Snackbar>
      
              </Stack>
              
            </Paper>
            <Paper >
 

                <br />
                <br />
            <TextField id="filled-basic" label="BIC" variant="filled" disabled  />  <br />  <br />
    
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '23ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="filled-basic" select label="Institution Name" variant="filled" disabled defaultValue="Ganesh" /> <br /> <br />
                <TextField id="filled-basic" select label="Account Holder Name" variant="filled" type="number" /><br /> <br />
                <TextField id="filled-basic" select label="Account Holder Number" variant="filled" disabled defaultValue="INR" /> <br /> <br />
              </Box>

              <Button variant="contained">CONTINUE -{'>'}</Button>


            </Paper>
            <Paper elevation={3} >
              
              <br /> <br />
            {/* <TextField id="filled-basic" label="BIC" variant="filled" disabled defaultValue={date} />  <br />  <br /> */}
              {/* <TextField id="filled-basic" label="Customer ID" variant="filled" type="number" /> <br /> <br /> */}
              {/* <TextField id="filled-basic"  select label="Account Holder Name" variant="filled" disabled defaultValue="Hello World"/> <br/> <br/>
<TextField id="filled-basic" select label="Filled" variant="filled" type="number" /> */}
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '23ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="filled-basic" select label="Transfer Type" variant="filled" disabled defaultValue="Ganesh" /> <br /> <br />
                <TextField id="filled-basic" select label="Message Code" variant="filled" type="number" /><br /> <br />
                <TextField id="filled-basic" select label="Amount" variant="filled" type="number" defaultValue="INR" /> <br /> <br />
                <TextField id="filled-basic" select label="Add Transfer Fee" variant="filled" type="number" disabled /> <br /> <br />
                <TextField id="filled-basic" select label="Clear Balance" variant="filled" type="number" disabled /> <br /> <br />
              </Box>

              <Button variant="contained">SEND</Button>

            </Paper>
          </Box>

        </center>
            
        </div>
    )
}
