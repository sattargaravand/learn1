import React, {useEffect, useState} from 'react';
import {AppBar, Box, Grid, Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {PhoneApi} from "../Api/PhoneApi";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useQuery} from "react-query";


const ShopPhone = () => {

    const [items, setItems] = useState([]);

    const HandleDelete = (id) => {
        let copyState = [...items];
        let index = copyState.findIndex((a) => (a.id === id))
        copyState.splice(index, 1)
        setItems(copyState);
    }

    const changeItemAmount = (itemId, isIncrease = true) => {

        let itemsCopy = [...items];
        let fIndex = itemsCopy.findIndex((i) => i.id === itemId)

        let item = itemsCopy[fIndex];
        if (isIncrease) {
            item.amount = item.amount + 1;
        } else {
            if (item?.amount > 1)
                item.amount = item.amount - 1;
        }

        setItems(itemsCopy);
    }

    const fetchData = async () => {
        if (items?.length > 0) return;
        try {
            const res = PhoneApi;
            setItems(res)
            return res;
        } catch (error) {
            console.log("error")
        }
    };
    const {isLoading} = useQuery(['phone_list'], fetchData)
    if (isLoading) return <>Loading...</>


    return (
        <>
            <Grid>
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

                            <h1 style={{color: 'red'}}>UserReducer</h1>

                            <Grid sx={{display: 'flex', gap: 2, textDecoration: 'none'}}>
                                <AddShoppingCartIcon/>
                            </Grid>

                        </Toolbar>
                    </AppBar>
                </Box>
            </Grid>
            <Grid container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%'
            }}>
                <Typography sx={{textAlign: 'center', fontSize: '25px', mt: 4, mb: 4}}>YOUR BAG</Typography>

                <Grid>
                    {items.map((item, id) => (
                        <Grid key={item.id} sx={{
                            display: 'flex',
                            gap: 8,
                            justifyContent: 'center',
                            alignItems: "center",
                            mb: 3,
                            width: '100%'
                        }}>

                            <Grid>
                                <img src={item.img} alt={"phone image"} width={"200px"} height={"200px"}/>
                            </Grid>
                            <Grid sx={{width: '100%'}}>
                                {item.title}
                                <br/>
                                {item.id}
                                <br/>
                                {item.price} <br/>
                                <button onClick={() => HandleDelete(item.id)}>remove</button>

                            </Grid>
                            <Grid sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <KeyboardArrowUpIcon

                                    onClick={() => {
                                        changeItemAmount(item.id)
                                    }}/>

                                <h3>{item.amount}</h3>

                                <KeyboardArrowDownIcon

                                    onClick={() => {
                                        changeItemAmount(item.id, false)

                                    }}/>
                            </Grid>
                        </Grid>
                    ))}

                </Grid>

            </Grid>
            <hr/>
            <Typography>Total</Typography>

        </>
    );

};

export default ShopPhone;