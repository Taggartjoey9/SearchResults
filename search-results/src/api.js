import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID bu6VP6piPwTBCAcE4KvLkHVBW2Bqu0xvcj_5S2bAArg'
        },
        params: {
            query: 'cars'
        }
    });

    console.log(response);

    return response;
};

export default searchImages;


