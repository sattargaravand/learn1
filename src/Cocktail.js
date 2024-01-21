import React from 'react';
import {Grid,Typography} from "@mui/material";
import {ApiData} from "./Api/ApiData";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';



const Cocktail = () => {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    return (
        <Grid item  sx={{display:'flex',flexDirection:'column',width:"80%"}}>

                <Box sx={{ flexGrow: 1 ,mb:4}}>
                    <AppBar position="static">
                        <Toolbar sx={{ flexGrow: 1,display:'flex',justifyContent:'space-between'}}  variant="dense">

                                <h1>MixMaster</h1>
                            <Grid sx={{display:'flex',gap:1}}>
                                <button>Home</button>
                                <button>About</button>
                                <button>Newsletter</button>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Box>

            <Grid sx={{display:'flex',mb:6,alignItems:'center',justifyContent:'center',width:'100%'}}>
                <CardContent>
                    <input/>
                    <button>search</button>
                </CardContent>


            </Grid>

            <Grid item container sx={{display:'flex',gap:1}} >

                {ApiData.map((item,index)=>(
                    <Grid xs={12}  sm={12} md={3} lg={2} key={item.id} sx={{display:'flex',flexDirection:'column',textAlign:'start',gap:1,padding:1,margin:1}}>
                        <img src={item.strDrinkThumb} alt={"cocktail"} width={"200px"} height={"200px"} />
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