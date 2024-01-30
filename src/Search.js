import React from 'react';
import {Grid, InputAdornment} from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from "@mui/icons-material/Search";

const Search = ({placeholder, defaultValue, onChange, id = '', autoComplete = false, otherProps,sx}) => {
    const autoStr = autoComplete ? 'on' : 'off';

    return (
        <Grid container sx={sx}>
            <OutlinedInput
                spellCheck={false}
                inputProps={{
                autoComplete: autoStr,
                contact_id: id
            }}
                           placeholder={placeholder}
                           defaultValue={defaultValue}
                           onChange={onChange}
                           sx={{
                               width: '100%', borderRadius: '30px', border: 'none', paddingRight: '20px',
                               background: '#FFFFFF',
                               boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)', "& fieldset": {border: 'none'}
                           }} id="input-with-icon-adornment"
                           endAdornment={
                               <InputAdornment position="end">
                                   <SearchIcon sx={{width:"50px",paddingLeft: '20px', color: '#797979'}}/>
                               </InputAdornment>} {...otherProps}/>
        </Grid>
    );
};

export default Search;