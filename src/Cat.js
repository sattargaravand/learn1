import React, {useState} from 'react';
import {Grid, Typography} from "@mui/material";
import {data} from "./data";
import SwipeDownIcon from '@mui/icons-material/SwipeDown';
const Cat = () => {
    const [search , setSearch] = useState('')
    // const handelSearch =(e)=>{
    //     e.preventDefault()
    //     let res = values.filter(data=>data.name.includes(e.target.search.value))
    //     setSearch(res)
    // }

    return (
        <Grid sx={{display:'flex',flexDirection:'column',gap:2,alignItems:'center',background:'#DCDCDC'}}>
            <Typography sx={{color:'red',fontSize:'50px'}}>Unsplash Images</Typography>
            <Typography sx={{color:'gray',fontSize:'30px'}}>  CatName <br/>  </Typography>

            <SwipeDownIcon fontSize={"large"}/>
            <Grid sx={{display:'flex',gap:2,alignItems:'center'}}>
                <Typography sx={{color:'blue',fontSize:'30px'}}>Persian</Typography>
                <Typography sx={{color:'green',fontSize:'30px'}}>Siamese</Typography>
                <Typography sx={{color:'black',fontSize:'30px'}}>Maine</Typography>
                <Typography sx={{color:'red',fontSize:'30px'}}>Ragdoll</Typography>
                <Typography sx={{color:'pink',fontSize:'30px'}}>British</Typography>
            </Grid>

            <Grid size={"small"}>
                <input  onChange={(e)=> setSearch(e.target.value)} placeholder={"Search Cat Name"} autoComplete={"item.name"}/>
                <button  variant={"outline"}>search</button>
            </Grid>

            <Grid sx={{display:'flex',gap:1,alignItems:'center',flexDirection:'row',margin:'auto',border:'1px solid ',padding:'5px'}}>

                {data.filter((item)=> {
                    return search.toLowerCase() === ''
                        ? item
                        : item.name.toLowerCase().includes(search);
                })
                    .map((item)=>(
                    <Grid key={item.id} sx={{display:'flex',flexDirection:"column",margin:3}} >

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