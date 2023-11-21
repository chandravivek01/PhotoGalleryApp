import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";


function App() {

    const [images, setImages] = useState([]);

    const handleSubmit = async (searchTerm) => {

        const result = await searchImages(searchTerm);
        setImages(result);
    }
    return (
        <>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </>
    );
}

export default App;
