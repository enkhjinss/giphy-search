import Search from "../components/search.js";
import GifList from "../components/gifList.js";

import "../styles/flex.css";
import "../styles/style.css";

const axios = require('axios');
let gifUrl = '';
const value = 'hey';
axios.get(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=3kpTo63OFuRHc39AHjKzEUcHHmqxHQwU&limit=10`).then((res) => {
    const gifsArray = res.data.data;
    gifsArray.forEach((el , i) => {
        gifUrl = el.images.downsized.url;
        console.log(gifUrl);
    });
})

const GiphySearch = () => {
    return (
            <main className="flex column align-center">
                <Search />
                <GifList />
            </main>
        )
}
export default GiphySearch;