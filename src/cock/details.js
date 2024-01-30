import React from 'react';
import {useLocation, useParams} from "react-router-dom";
import {Grid, Typography} from "@mui/material";
import Header from "./Header";

const Details = () => {
    const {blogId} = useParams();
    const {item: blogInfo} = useLocation()?.state ?? {};
    console.log(blogInfo)
    return (
        <>
            <Header/>
            <Grid
                sx={{
                    display:'flex',
                    width:'600px',
                    margin:'auto',
                    elevation: 12,
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 2,
                    backgroundColor: '#d38f8f',
                    mt:8,
                    color:'red',
                    borderRadius:'5%',
                    textAlign:'start',
                    justifyContent:'space-between',
                    gap:4



                }}>

                <img style={{width: '50%', borderRadius: '5%'}} src={blogInfo?.strDrinkThumb} alt={"cocktail"}/>

                    <Grid>
                        <Typography> Name : {blogInfo?.strDrink}</Typography> <br/>
                        <Typography> CateGory : {blogInfo?.strCategory}</Typography> <br/>
                        <Typography> Info: {blogInfo?.strAlcoholic}</Typography> <br/>
                        <Typography> Glass: {blogInfo?.strInstructions}</Typography>
                    </Grid>

            </Grid>
        </>
    );
};

export default Details;