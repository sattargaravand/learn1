import React from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Grid} from "@mui/material";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar
                    sx={{display:{ xs:'block',sm:'flex',md:'flex'}, justifyContent: 'space-between', backgroundColor: '#B8E896',boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)'}}
                    variant="dense">

                    <h1 style={{color:'red'}}>MixMaster</h1>

                    <Grid sx={{display: 'flex', gap: 2 , textDecoration:'none'}}>
                        <NavLink to={'/'}>home</NavLink>
                        <NavLink to={'/About'}>about</NavLink>
                        <NavLink to={'/Newsletter'}>newsletter</NavLink>
                    </Grid>

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;