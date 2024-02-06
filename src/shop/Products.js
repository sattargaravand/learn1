import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import {Badge, Box, Grid} from "@mui/material";
import {NavLink} from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Products = () => {
    return (
        <div>
            <Box>
                <AppBar position="static">
                    <Toolbar
                        sx={{
                            display: {xs: 'block', sm: 'flex', md: 'flex'},
                            justifyContent: 'space-between',
                            backgroundColor: '#B8E896',
                            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)'
                        }}
                        variant="dense">

                        <CleanHandsIcon/>

                        <Grid sx={{display: 'flex', gap: 2, textDecoration: 'none'}}>
                            <NavLink to={'/'}>home</NavLink>
                            <NavLink to={'/About'}>about</NavLink>
                            <NavLink to={'/Products'}>Products</NavLink>
                            <NavLink to={'/Cart'}>cart</NavLink>
                        </Grid>
                        <Grid sx={{display: 'flex', flexDirection: 'column'}}>
                            <Badge badgeContent={4} color={"primary"}>
                            </Badge>
                            <AddShoppingCartIcon sx={{fontSize: '30px'}}/>
                            <br/>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Products;