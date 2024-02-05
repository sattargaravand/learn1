import React, {useState} from 'react';
import {AppBar, Badge, Box, Grid, Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {PhoneApi} from "../Api/PhoneApi";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useQuery} from "react-query";


const ShopPhone = () => {

    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


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
            setItems([...items, item]);

            setTotalPrice(totalPrice + item.price);


        } else {
            if (item?.amount > 0)
                item.amount = item.amount - 1;
            else {
                if (totalPrice >= 0) return false;
            }

            setTotalPrice(totalPrice - item.price)

        }


        setItems(itemsCopy);
    }


    const f = new Intl.NumberFormat(undefined, '', {
        currency: "USD",
        style: "currency",
    })


    let totalCount = 0;
    items?.map(i => totalCount += i?.amount)


    let actualPrice = 0;
    items?.map(item => actualPrice += item?.price * item?.amount)

    return (
        <Grid container item
              sx={{display: 'flex', flexDirection: 'column', width: "100%", backgroundColor: '#ffffff'}}>
            <Grid>

                <Box>
                    <AppBar position="static">
                        <Toolbar

                            sx={{
                                display: {xs: 'block', sm: 'flex', md: 'flex'},
                                justifyContent: 'space-between',
                                backgroundColor: '#3a35cb',
                                boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)'
                            }}
                            variant="dense">

                            <h1 style={{color: 'red'}}>UserReducer</h1>
                            <Grid sx={{display: 'flex', gap: 2, textDecoration: 'none'}}>

                                <Grid sx={{display: 'flex', flexDirection: 'column'}}>
                                    <Badge badgeContent={totalCount} color={"primary"}>
                                    </Badge>
                                    <AddShoppingCartIcon sx={{fontSize: '40px'}}/>
                                    <br/>
                                </Grid>

                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Box>

            </Grid>
            <Grid item container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                backgroundColor: 'rgba(255,255,255,0.68)'
            }}>
                <h2>Total Price: {f.format(actualPrice)} </h2>

                <Typography sx={{textAlign: 'center', fontSize: '25px', mt: 2, mb: 2}}>YOUR BAG</Typography>


                <Grid item columns={1} xs={1} sm={4} md={3} lg={2}>
                    {items.map((item, id) => (
                        <Grid key={item.id} sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', sm: 'column', md: 'row'},
                            justifyContent: 'center',
                            alignItems: "center",
                            mb: 1,
                            gap: 6,
                        }}>

                            <Grid>
                                <img src={item.img} alt={"phone image"} width={"200px"} height={"200px"}/>
                            </Grid>

                            <Grid item

                                  sx={{justifyContent: 'space-between', display: 'flex', gap: 2}}>
                                <Grid>

                                    {item.title}
                                    <br/>
                                    <br/>
                                    <Typography>${item.price}</Typography> <br/>


                                    <button onClick={() => HandleDelete(item.id)}>remove</button>
                                </Grid>
                                <hr/>


                                <Grid item

                                      sx={{alignItems: 'center', textAlign: 'center'}}>
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


                        </Grid>


                    ))}

                </Grid>

            </Grid>

            <Typography fontSize={"20px"}>Total Price: {f.format(actualPrice)} </Typography>

        </Grid>
    );

};

export default ShopPhone;