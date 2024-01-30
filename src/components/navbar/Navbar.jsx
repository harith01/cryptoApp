import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
    const classes = useStyles();
    return ( 
    <AppBar color="primary">
        <Toolbar className={classes.toolbar}>
          <div className="logo">
            <Typography variant="h3">Cryptoverse</Typography>
          </div>
          <div className={classes.navtabs}>
            <Link to="/"><Button variant="contained" color="primary">Homepage</Button></Link>
            <Link to="/cryptos"><Button variant="contained" color="primary">Cryptocurrencies</Button></Link>
            <Link to="/exchanges"><Button variant="contained" color="primary">Exchanges</Button></Link>
            <Link to="/news"><Button variant="contained" color="primary">News</Button></Link>
          </div>
        </Toolbar>
      </AppBar> 
    );
}
 
export default Navbar;