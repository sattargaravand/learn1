import React, {useRef, useState} from 'react';
import {Grid, Typography ,Button} from "@mui/material";
import ApiCall from "./api/ApiCall";


const Cat = () => {
    const [imageCat, setImageCat] = useState(ApiCall);
    const [nameCat, setNameCat] = useState();

    const inPutRef = useRef('');

    const handelName = (index) => {
        let cCat = [...imageCat];

    }


    return (
        <Grid sx={{display:'flex',flexDirection:'column',gap:2}}>
            <h1>Unsplash Images</h1>
            <Grid size={"small"}>
                <input placeholder={"Cat name Search"} ref={inPutRef} onChange={(e) => (e.target.value)}/>
                <button onClick={handelName} variant={"outline"}>search</button>
            </Grid>

            <Grid sx={{display:'flex',flexDirection:"rows",gap:1}}>

                {imageCat.map((item, index) => (
                    <Grid sx={{display:'flex',flexDirection:"column",margin:3}} >

                        <img src={item.image} alt={"Cat_Images"} width={"200px"} height={"200px"}/>
                        <Typography>Name_Cat: {item.name}</Typography>
                        <Typography>Age_Cat: {item.age}</Typography>
                    </Grid>

                ))}

            </Grid>
        </Grid>
    );
};

export default Cat;