import "../styles/flex.css";
import "../styles/style.css";

import { useEffect } from "react";

const axios = require("axios");

const Search = () => {
    const onChange = (e) => {
        const value = e.target.value;
        axios
            .get(
                `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=3kpTo63OFuRHc39AHjKzEUcHHmqxHQwU&limit=10`
            )
            .then((response) => {
                const gifsArray = response.data.data;
                gifsArray.forEach((el, i) => {
                    console.log(el.images.downsized.url);
                });
            });

        // const [gif , setGif] = useState;
    };
    return <input type="text" onChange={onChange} placeholder="Search GIPHY" />;
};
export default Search;
