import React, {useState} from 'react';
import {Badge, Box, Button, Card, CardActions, CardContent, Grid, Switch, Typography,} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {NavLink, useNavigate} from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import image from "./thumbnail-photo.jpg";
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import {createTheme, ThemeProvider} from "@mui/material/styles";

const ComfortShop = () => {
    const navigate = useNavigate();
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
            <Grid sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center',
                background: 'rgba(0,1,5,0)',
                height: '100vh',

            }}>
                <Card sx={{width:'100%'}}>

                    {/*<WbSunnyIcon checked={toggleColorTheme} onClick={toggleDarkTheme}/>*/}


                    <Grid container sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
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


                        <Grid col={12} sx={{display: 'flex', margin: 'auto', gap: 8, mt: 8}}>
                            <Grid md={6}>
                                <Typography variant={"h3"}>
                                    We are changing <br/>
                                    the way people <br/>
                                    Shop
                                </Typography>
                                <Typography>
                                    Save your favorite articles to read offline,<br/>
                                    sync your reading lists across devices and customize your reading <br/>
                                    experience with the official Wikipedia app.
                                </Typography>
                                <button> OUR PRODUCTS</button>
                            </Grid>
                            <Grid md={6}>
                                <img src={image} alt="image shop"/>
                            </Grid>
                        </Grid>

                        <Typography sx={{margin: 'auto', mt: 4, mb: 4}}> sadwed cfef wwqeqwe </Typography>
                    </Grid>
                </Card>
            </Grid>
        </ThemeProvider>
);
};

export default ComfortShop;