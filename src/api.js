import axios from "axios";

const searchImages = async (searchTerm) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 1n5yGUlW8vQgqNK53Ndy8ChdCSssVVqVCED8hMFAne8',
        },
        params: {
            query: searchTerm,
        }
    });
    return response.data.results;
};

export default searchImages;