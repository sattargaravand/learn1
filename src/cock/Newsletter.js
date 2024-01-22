import React from 'react';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Grid, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

const Newsletter = () => {
    return (
        <Grid>

            <Box sx={{ mb: 4,}}>
                <AppBar position="static">
                    <Toolbar
                        sx={{flexGrow: 1, display: 'flex', justifyContent: 'space-between', backgroundColor: '#B8E896'}}
                        variant="dense">

                        <h1>MixMaster</h1>

                        <Grid sx={{display: 'flex', gap: 2}}>
                            <NavLink to={'/'}>home</NavLink>
                            <NavLink to={'/About'}>about</NavLink>
                            <NavLink to={'/Newsletter'}>new</NavLink>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </Box>


            <Grid>
                <Card>
                    <CardContent sx={{textAlign:'center',fontSize: 14}}>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="div">
                            be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>

                </Card>
                <Grid/>

            </Grid>
        </Grid>
    );
};

export default Newsletter;