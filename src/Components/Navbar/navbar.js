import "./navbar.css" ;
import logo from "./logo.png";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';





const navbar = () => {
  return (
    <AppBar
      position="static"
      color="success"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <div className="nav">
            <Link to={`/`}>
              <img src={logo} alt="NutriLife" className="logo"></img>
              NutriLife
            </Link>
          </div>
        </Typography>
        <nav className="botones d-flex align-items-center">
          <Link to={`/`}> <div className="botonesMenu">Todos</div> </Link>
          <Link to={`/category/fruta`}> <div className="botonesMenu">Frutas</div> </Link>
          <Link to={`category/vegetal`}> <div className="botonesMenu">Verduras</div> </Link>
          <div><CartWidget/></div>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default navbar;