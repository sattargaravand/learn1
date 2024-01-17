import React, {useState} from 'react';
import { Card, Grid, Switch, Typography} from "@mui/material";
import {data} from "./data";
import SwipeDownIcon from '@mui/icons-material/SwipeDown';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Cat = () => {
    const [search, setSearch] = useState('');
    const [toggleDarkMode, setToggleDarkMode] = useState(true);
    // const [toggleColorMode, setToggleColorMode] = useState(false);

    const toggleDarkTheme = () => {
        setToggleDarkMode(!toggleDarkMode);
    };
    // const toggleColorTheme = () => {
    //     setToggleColorMode(!toggleColorMode);
    // };

    // applying the primary and secondary theme colors
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
    // const ColorTheme = createTheme({
    //     palette: {
    //         mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
    //         primary: {
    //             main: '#000dec',
    //         },
    //         secondary: {
    //             main: 'rgba(24,38,2,0.6)',
    //
    //         },
    //     },
    // });

    return (
        <ThemeProvider theme={darkTheme}>
           {/*<ThemeProvider theme={ColorTheme}>*/}

                <Card>
                    <  Grid sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        alignItems: 'center',
                        background: 'rgba(0,1,5,0)'
                    }}>

                            {/*<WbSunnyIcon checked={toggleColorTheme} onClick={toggleDarkTheme}/>*/}
                            <Switch checked={toggleDarkMode} onClick={toggleDarkTheme}/>

                        <Typography sx={{color: 'red', fontSize: '50px'}}>Unsplash Images</Typography>
                        <Typography sx={{color: 'gray', fontSize: '30px'}}> CatName <br/> </Typography>

                        <SwipeDownIcon fontSize={"large"}/>
                        <Grid sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                            <Typography sx={{color: 'blue', fontSize: '30px'}}>Persian</Typography>
                            <Typography sx={{color: 'green', fontSize: '30px'}}>Siamese</Typography>
                            <Typography sx={{color: 'black', fontSize: '30px'}}>Maine</Typography>
                            <Typography sx={{color: 'red', fontSize: '30px'}}>Ragdoll</Typography>
                            <Typography sx={{color: 'pink', fontSize: '30px'}}>British</Typography>
                        </Grid>

                        <Grid size={"small"}>
                            <input onChange={(e) => setSearch(e.target.value)} placeholder={"Search Cat Name"}
                                   autoComplete={"item.name"}/>
                            <button>search</button>
                        </Grid>

                        <Grid sx={{
                            display: 'flex',
                            gap: 1,
                            alignItems: 'center',
                            flexDirection: 'row',
                            margin: 'auto',
                            border: '1px solid ',
                            padding: '5px'
                        }}>

                            {data.filter((item) => {
                                return search.toLowerCase() === ''
                                    ? item
                                    : item.name.toLowerCase().includes(search);
                            })
                                .map((item) => (
                                    <Grid key={item.id} sx={{display: 'flex', flexDirection: "column", margin: 3}}>

                                        <img src={item.image} alt={"Cat_Images"} width={"200px"} height={"200px"}/>
                                        <Typography>Name_Cat: {item.name}</Typography>
                                        <Typography>Age_Cat: {item.age}</Typography>
                                    </Grid>

                                ))}

                        </Grid>

                    </Grid>
                </Card>
            {/*</ThemeProvider>*/}

         </ThemeProvider>

    );
};

export default Cat;