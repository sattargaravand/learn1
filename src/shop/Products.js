import React, {useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import {Badge, Box, Card, Grid, Switch} from "@mui/material";
import {NavLink} from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const Products = () => {
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


                    </Grid>
                </Card>
            </Grid>
            <Grid container sx={{textAlign:'center',justifyContent:'center',padding:4,margin:1}}>
                <h3>
                    Product classification
                    A product can be classified as tangible or intangible. A tangible product is an actual physical object that can be perceived by touch such as a building, vehicle, gadget, or clothing. An intangible product is a product that can only be perceived indirectly such as an insurance policy. These services can be broadly classified under intangible products, which can be durable or nondurable.

                    <br/>
                    By use
                    In its online product catalog, retailer Sears, Roebuck and Company divides its products into "departments", then presents products to potential shoppers according to (1) function or (2) brand.[2] Each product has a Sears item number and a manufacturer's model number. Sears uses the departments and product groupings with the intention of helping customers browse products by function or brand within a traditional department-store structure.[3]

                    By association
                    A product line is "a group of products that are closely related, either because they function in a similar manner, are sold to the same customer groups, are marketed through the same types of outlets, or fall within given price ranges."[4] Many businesses offer a range of product lines which may be unique to a single organisation or may be common across the business's industry. In 2002 the US Census compiled revenue figures for the finance and insurance industry by various product lines such as "accident, health and medical insurance premiums" and "income from secured consumer loans".[5] Within the insurance industry, product lines are indicated by the type of risk coverage, such as auto insurance, commercial insurance and life insurance.[6]

                    National and international product classifications
                    Various classification systems for products have been developed for economic statistical purposes. The NAFTA signatories are working on a system that classifies products called NAPCS as a companion to the North American Industry Classification System (NAICS).[7] The European Union uses a "Classification of Products by Activity" among other product classifications.[8] The United Nations also classifies products for international economic activity reporting.[9]

                    The Aspinwall Classification System [10][11] classifies and rates products based on five variables:
                    <br/>

                    Replacement rate (How frequently is the product repurchased?)
                    Gross margin (How much profit is obtained from each product?)
                    Buyer goal adjustment (How flexible are the buyers' purchasing habits with regard to this product?)
                    Duration of product satisfaction (How long will the product produce benefits for the user?)
                    Duration of buyer search behavior (How long will consumers shop for the product?)
                    The National Institute of Governmental Purchasing (NIGP)[12] developed a commodity and services classification system for use by state and local governments, the NIGP Code.[13] The NIGP Code is used by 33 states within the United States as well as thousands of cities, counties and political subdivisions. The NIGP Code is a hierarchical schema consisting of a 3 digit class, 5 digit class-item, 7 digit class-item-group, and an 11 digit class-item-group-detail.[14] Applications of the NIGP Code include vendor registration, inventory item identification, contract item management, spend analysis, and strategic sourcing.
                    <br/>
                </h3>
            </Grid>
            </Card>
        </ThemeProvider>
    );
};
export default Products;