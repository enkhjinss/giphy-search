import "../styles/flex.css";
import "../styles/style.css";

import { useState } from "react";

const axios = require("axios");


const Search = () => {

    const onChange = (e) => {

        const [gif , setGif] = useState;

        console.log(e.target.value)
    }
    return (
        <input type="text" onChange={ onChange } placeholder="Search GIPHY"/>
    )
}
export default Search;