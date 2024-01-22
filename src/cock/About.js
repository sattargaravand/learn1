import React from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {NavLink} from "react-router-dom";
import {Grid, Typography} from "@mui/material";

const About = () => {
    return (

        <Box sx={{flexGrow: 1, mt: 4,justifyContent:'center',alignItems:"center",padding:4}}>
            <AppBar>
                <Toolbar sx={{display:'flex',justifyContent:"space-between",backgroundColor:'#B8E896'}}>


                    <h1>MixMaster</h1>

                    <Grid sx={{display:'flex',gap: 2}}>
                        <NavLink to={'/'}>home</NavLink>
                        <NavLink to={'/About'}>about</NavLink>
                        <NavLink to={'/Newsletter'}>new</NavLink>
                    </Grid>



                </Toolbar>
            </AppBar>

            <Grid sx={{padding:4,margin:'auto'}}>
                <h1>About Us</h1>

                <Typography>
                    It is the glory of the Achaemenians. The material of this beautiful work is silver with gold
                    coating. In this ancient work, the antelope's hooves are placed on the mask of a mythological
                    creature named Silenus (a creature combined with a human and a goat). This work is made by casting
                    method. The beautiful wings and horns of this mountain goat are a symbol of the animal's vitality
                    and energy in Achaemenid art. This vase is related to a metal vase; And now it is kept in the Louvre
                    Museum in Paris.
                </Typography>
            </Grid>
        </Box>
    );
};

export default About;