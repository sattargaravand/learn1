import React, {useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {ApiData} from "./Api/ApiData";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Header from "./cock/Header";
import { useNavigate} from "react-router-dom";
import Search from "./Search";


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
        p: 4,
        backgroundColor: '#b4b5f3'

    };

    const navigate = useNavigate();
    console.log('add new log')
    return (
        <>


            <Grid container item
                  sx={{display: 'flex', flexDirection: 'column', width: "100%", backgroundColor: '#ffd4d4'}}>
                <Header/>

                <Grid item sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: {xs: 'center'},
                    margin:'auto',
                    mt:2,
                    mb:2
                }}>

                        <Search onChange={(e) => setSearch(e.target.value)}/>

                </Grid>

                <Grid item container sx={{
                    display: 'flex',
                    gap: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '25px',
                }}>

                    {ApiData.filter((item, idDrink) => {
                        return search.toLowerCase() === ''
                            ? item
                            : item.strDrink.toLowerCase().includes(search);
                    })
                        .map((item) => (
                            <Grid item columns={12} xs={6} sm={4} md={3} lg={2} key={item.idDrink}
                                  onClick={() => navigate('/blog/details', {state: {item}})}
                                  sx={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      textAlign: 'start',
                                      gap: 1,
                                      borderRadius: '4%',
                                      boxShadow:'8px 4px 5px rgb(8 10 118)'
                                  }}>

                                <Grid sx={{width: "100"}}>
                                    <img style={{borderRadius:'4%'}} onClick={() => handleOpen(item.strDrinkThumb)} src={item.strDrinkThumb}
                                         alt={"cocktail"} width={"100%"}
                                    />

                                    <Modal
                                        open={open === item.strDrinkThumb}
                                        onClose={handleClose}
                                    >


                                        <Box sx={style}>
                                            <h2 style={{textAlign: 'center'}}>{item.strDrink}</h2>

                                            <Grid sx={{display: 'flex', overflow: 'hidden', width: '100%'}}>
                                                <img style={{width: '50%', borderRadius: '5%',}} src={item.strDrinkThumb}
                                                     alt={"cocktail"}/>

                                                <Grid sx={{
                                                    display: 'flex',
                                                    flexDirection: "column",
                                                    textAlign: 'start',
                                                    padding: 2,
                                                }}>
                                                    <Typography> <span style={{backgroundColor:'green'}}>Name:</span> {item.strDrink}</Typography>
                                                    <Typography> <span style={{backgroundColor:'green'}}>CateGory:</span>{item.strCategory}</Typography>
                                                    <Typography> <span style={{backgroundColor:'green'}}>Info:</span>{item.strAlcoholic}</Typography>
                                                    <Typography> <span style={{backgroundColor:'green'}}>Glass:</span> {item.strInstructions}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>


                                    </Modal>
                                </Grid>
                                <Typography> <span style={{backgroundColor:'#B4B5F3FF',fontSize:'20px',padding:3,margin:3,borderRadius:'5%'}}> {item.strDrink} </span></Typography>
                                {item.strCategory}<br/>
                                {item.strAlcoholic}<br/>
                                <Typography><span style={{backgroundColor:'green'}}>DateModified: {item.dateModified} </span></Typography>
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </>
    );
};

export default Cocktail;