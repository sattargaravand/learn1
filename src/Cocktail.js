import React, {useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {ApiData} from "./Api/ApiData";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CardContent from '@mui/material/CardContent';
import {NavLink} from "react-router-dom";
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';



const Cocktail = () => {

    const [search, setSearch] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = (item) => setOpen(item);
    const handleClose = () => setOpen(undefined);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        elevation: 12,
        border: '2px solid #000',
        boxShadow: 24,
        p:4,
        backgroundColor:'#b4b5f3'

    };

    return (
        <Grid container item sx={{display: 'flex', flexDirection: 'column', width: "100%", backgroundColor: '#ffd4d4'}}>

            <Box sx={{flexGrow: 1, mb: 4}}>
                <AppBar position="static">
                    <Toolbar
                        sx={{flexGrow: 1, display: 'flex', justifyContent: 'space-between', backgroundColor: '#d6f5c5'}}
                        variant="dense">

                        <h1 style={{color:'red'}}>MixMaster</h1>

                        <Grid sx={{display: 'flex', gap: 2}}>
                            <NavLink to={'/'}>home</NavLink>
                            <NavLink to={'/About'}>about</NavLink>
                            <NavLink to={'/Newsletter'}>new</NavLink>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </Box>

            <Grid item  sx={{display: 'flex', mb: 6, alignItems: 'center', justifyContent: 'center',boxShadow:'6px -6px 20px'}}>
                <CardContent>
                    <input onChange={(e) => setSearch(e.target.value)}/>

                    <button>search</button>
                </CardContent>
            </Grid>

            <Grid item container sx={{display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center',padding:'15px',border:'5px solid ',width:'100%'}}>

                {ApiData.filter((item, idDrink) => {
                    return search.toLowerCase() === ''
                        ? item
                        : item.strDrink.toLowerCase().includes(search);
                })
                    .map((item) => (
                        <Grid  item xs={6} sm={6} md={3} lg={2} key={item.idDrink}
                              sx={{display: 'flex', flexDirection: 'column', textAlign: 'start', gap: 1}}>

                            <Grid sx={{boxShadow:'2px 4px 3px',borderRadius:'5%'}} >
                                <img onClick={()=>handleOpen(item.strDrinkThumb)} src={item.strDrinkThumb} alt={"cocktail"} width={"200px"}
                                     height={"200px"}/>

                                <Modal
                                    open={open === item.strDrinkThumb}
                                    onClose={handleClose}
                                >


                                    <Box sx={style}>
                                        <h2 style={{textAlign:'center'}}>{item.strDrink}</h2>

                                        <Grid sx={{display: 'flex',overflow:'hidden'}}>
                                            <img style={{width:'200px',height:'200px',borderRadius:'5%',boxShadow:'2px 4px 3px'}} src={item.strDrinkThumb} alt={"cocktail"}/>

                                            <Grid sx={{display: 'flex',flexDirection:"column",textAlign:'start',padding:2,}}>
                                            <Typography> Name: {item.strDrink}</Typography> <br/>
                                            <Typography> CateGory : {item.strCategory}</Typography><br/>
                                            <Typography> Info: {item.strAlcoholic}</Typography>
                                            <Typography> Glass: {item.strInstructions}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>


                                </Modal>
                            </Grid>
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