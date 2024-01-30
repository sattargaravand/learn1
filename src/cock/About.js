import React from 'react';
import Box from "@mui/material/Box";
import {Grid, Typography} from "@mui/material";
import Header from "./Header";

const About = () => {
    return (

        <Box item sx={{justifyContent:'center',alignItems:"center"}}>

            <Header/>

            <Grid item sx={{padding:4,margin:'auto'}}>
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