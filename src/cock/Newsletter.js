import React from 'react';
import {Grid, TextField, Typography} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Header from "./Header";


const Newsletter = () => {
    return (
        <Grid>

            <Grid>

                <Card>
                    <Header/>
                    <CardActions>

                        <CardContent sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'start',
                            fontSize: 14,
                            gap: 2,
                            width: '100%',
                            alignItems: 'center'
                        }}>
                            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                Our Newsletter
                            </Typography>
                            <Typography>Name</Typography>
                            <TextField/>
                            <Typography>Last Name</Typography>
                            <TextField/>
                            <Typography>Email</Typography>
                            <TextField/>
                            <Button variant={"contained"}>Submit</Button>
                        </CardContent>
                    </CardActions>


                </Card>
                <Grid/>

            </Grid>
        </Grid>
    );
};

export default Newsletter;