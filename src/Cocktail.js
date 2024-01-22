import React from 'react';
import {Grid, Typography} from "@mui/material";
import {ApiData} from "./Api/ApiData";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CardContent from '@mui/material/CardContent';
import {Link, NavLink} from "react-router-dom";
import Home from "./cock/Home";


const Cocktail = () => {

    return (
        <Grid item sx={{display: 'flex', flexDirection: 'column', width: "100%",backgroundColor:'#f8d1d1'}}>

            <Box sx={{flexGrow: 1, mb: 4}}>
                <AppBar position="static">
                    <Toolbar sx={{flexGrow: 1, display: 'flex', justifyContent: 'space-between',backgroundColor:'#d6f5c5'}} variant="dense">

                        <h1>MixMaster</h1>

                        <Grid sx={{display:'flex',gap: 2}}>
                            <NavLink to={'/'}>home</NavLink>
                            <NavLink to={'/About'}>about</NavLink>
                            <NavLink to={'/Newsletter'}>new</NavLink>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </Box>

            <Grid sx={{display: 'flex', mb: 6, alignItems: 'center', justifyContent: 'center'}}>
                <CardContent>
                    <input/>
                    <button>search</button>
                </CardContent>


            </Grid>

            <Grid item container sx={{display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'center'}}>

                {ApiData.map((item, index) => (
                    <Grid xs={6} sm={6} md={3} lg={2} key={item.id}
                          sx={{display: 'flex', flexDirection: 'column', textAlign: 'start', gap: 1,}}>
                        <img src={item.strDrinkThumb} alt={"cocktail"} width={"200px"} height={"200px"}/>
                        {item.strDrink} <br/>
                        {item.strCategory}<br/>
                        {item.strAlcoholic}<br/>
                        {item.dateModified}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Cocktail;