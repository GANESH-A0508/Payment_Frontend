import Payment from "./components/Payment";
import PaymentStep from "./components/PaymentStep";
// import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyService from "./components/services/CurrencyService";
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Box, Paper
} from "@mui/material";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <AppBar>
        <toolbar>
          <h1 style={{textAlign:"center"}}>MAKE TRANACTION FROM HERE </h1>
        </toolbar>
      </AppBar>
      <Homepage />
       
        {/* <Payment /> */}
      {/* <PaymentStep /> */}
    </div>
  );
}

export default App;
