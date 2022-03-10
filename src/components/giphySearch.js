const axios = require('axios');
let gifUrl = '';

axios.get('https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YunaSp2q3dOpPZaeCWG7LKI4f5h8M14D&limit=3').then((res) => {
    const gifsArray = res.data.data;
    gifsArray.forEach((el , i) => {
        gifUrl = el.images.downsized.url;
        console.log(gifUrl);
    });
})

const Search = () => {
    return (
        <img src='https://media3.giphy.com/media/3o84U2nKUT4ZqYBEQM/giphy-downsized.gif?cid=ffff84b8kf5zztqfy6ff9t5d46mej34vbygi6f4uzsl6v8k2&rid=giphy-downsized.gif&ct=g'/>
    )
}
export default Search;