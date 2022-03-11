import Search from "../components/search.js";
import GifList from "../components/gifList.js";

import "../styles/flex.css";
import "../styles/style.css";

const GiphySearch = () => {
    return (
        <main className="flex column align-center">
            <Search />
            <GifList />
        </main>
    );
};
export default GiphySearch;
