import React, {useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import {Badge, Box, Card, Grid, Switch, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const About = () => {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);

    const toggleDarkTheme = () => {
        setToggleDarkMode(!toggleDarkMode);
    };

    const darkTheme = createTheme({
        palette: {
            mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
            primary: {
                main: '#ff0026',
            },
            secondary: {
                main: 'rgba(255,255,255,0.6)',

            },
        },
    });
    return (
        <ThemeProvider theme={darkTheme}>
            <Card>
            <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center',
                background: 'rgba(0,1,5,0)',
                width: '100%',
                padding: '4'

            }}>
                <Card sx={{width: '100%'}}>

                    {/*<WbSunnyIcon checked={toggleColorTheme} onClick={toggleDarkTheme}/>*/}


                    < Grid sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
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
                                        <Switch checked={toggleDarkMode} onClick={toggleDarkTheme}/>
                                        <AddShoppingCartIcon sx={{fontSize: '30px'}}/>
                                        <br/>
                                    </Grid>

                                </Toolbar>
                            </AppBar>

                        </Box>
                    </Grid>
                </Card>
            </Grid>

            <Grid sx={{textAlign:'center',mt:4,}}>
                <Typography sx={{color:'red',fontSize:'40px'}}> the way people sync your reading </Typography>
                <h1> We are changing
                    the way people
                    Shop
                    Save your favorite articles to read offline,
                    sync your reading lists across devices and customize your reading
                    experience with the official Wikipedia app.
                the way people sync your reading lists across devices and customize your reading
                Shop experience with the
                    the way people sync your reading lists across devices and customize your reading

                </h1>
            </Grid>

            </Card>
        </ThemeProvider>
    );
};

export default About;