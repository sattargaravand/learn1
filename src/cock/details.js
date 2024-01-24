import React from 'react';
import {useLocation, useParams} from "react-router-dom";

const Details = () => {
    const {blogId} = useParams();
    const {item: blogInfo}  = useLocation()?.state  ?? {};
    console.log(blogInfo)
    return (
        <div>
            this block id is {blogInfo?.strGlass}<br/>
            {blogInfo?.strCategory} <br/>
            {blogInfo?.strInstructions}
        </div>
    );
};

export default Details;