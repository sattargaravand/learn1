import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ item }) => {
    const [status, setStatus] = useState(false);
console.log(item)
    const { weight, rgb, type } = item;

    function copyText() {
        navigator.clipboard.writeText(colorCode);
        setStatus(true);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setStatus(false);
            return () => clearInterval(interval);
        }, 8000);
    }, [status]);

    // let colorCode = rgbToHex(rgb[0],rgb[1],rgb[2]);

    let colorCode = rgbToHex(...rgb);
    // console.log(colorCode);

    return (
        <article
            onClick={copyText}
            className={`color ${type === "shade" && "color-light"}`}
            style={{ backgroundColor: `${colorCode}` }}
        >
            <p> {weight}%</p>
            <p>{colorCode}</p>
            {status ? <p> Copyied to clipboard</p> : ""}
        </article>
    );
};

export default SingleColor;
