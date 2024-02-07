import React, {useState} from 'react';
import {Box, Button, Card, Grid, Paper, Switch, Typography,} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {NavLink, useNavigate} from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import image from "./thumbnail-photo.jpg";
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ComfortShop = () => {
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

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

    // const HandleDelete = (id) => {
    //     let copyState = [...items];
    //     let index = copyState.findIndex((a) => (a.id === id))
    //     copyState.splice(index, 1)
    //     setItems(copyState);
    // }

    const changeItemAmount = (itemId) => {

        let itemsCopy = [...items];
        let fIndex = itemsCopy.findIndex((i) => i.id === itemId)

        let item = itemsCopy[fIndex];
        item.amount = item.amount + 1;
        setItems([...items, item]);

        setTotalPrice(totalPrice + item.price);
        setItems(itemsCopy);
    }

    return (

        <ThemeProvider theme={darkTheme}>
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
                                <Button variant={"contained"}> OUR PRODUCTS</Button>
                            </Grid>
                            <Grid md={6}>
                                <img src={image} alt="image shop"/>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid sx={{
                        display: 'flex',
                        flexDirection: 'rows',
                        gap: 2,
                        justifyContent: "center",
                        my: 4,
                        width: '100%'
                    }}>


                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 1,
                                    width: 128,
                                    height: 128,
                                },
                            }}
                        >
                            <Paper elevation={9}>We are changing</Paper>
                            <Paper> the way people</Paper>
                            <Paper elevation={9}>Shop
                            </Paper>
                        </Box>
                    </Grid>
                </Card>
            </Grid>
        </ThemeProvider>
    );
};

export default ComfortShop;